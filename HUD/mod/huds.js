const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const fs = require("fs");
const address = require("ip").address();
const child_process = require("child_process");
const shortid = require("shortid");

// Инициализация базы данных
const adapter = new FileSync("./databases/huds.json");
const db = low(adapter);
db.defaults({ huds: [] }).write();

module.exports = {
  loadConfig: () => {
    if (!fs.existsSync("./config.json")) return false;
    let config = {};
    try {
      config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
      config.Address = address;
      return config;
    } catch (e) {
      console.warn(
        "\n\tConfig file is corrupted or doesn't exist, proceeding with default values"
      );
      config.Address = address;
      config.ServerPort = 1248;
      config.GameStateIntegrationPort = 1337;
      config.SteamApiKey = "";
      config.PrintPlayerData = false;
      config.DisplayAvatars = false;
      config.DisplayPlayerAvatars = false;
      config.DisplayTeamFlags = false;
      config.DisplayPlayerFlags = false;
      config.LeftImage = "";
      config.LeftImage2 = "";
      config.LeftImage3 = "";
      config.LeftOneImage = "";
      config.DisplayOnlyMainImage = "";
      config.DisplayScoreboard = true;
      config.DisplayRadar = false;
      config.LeftPrimary = "";
      config.LeftSecondary = "";
      config.RightImage = "";
      config.RightPrimary = "";
      config.RightSecondary = "";
      config.AvatarDirectory = "/public/files/avatars/";
      config.SpecialEvent = "";
      config.GSIToken = "120987";
      return config;
    }
  },

  addHUD: (req, res) => {
    if (!fs.existsSync("./public/huds")) return res.sendStatus(500);

    let existingHUDs = fs.readdirSync("./public/huds").filter(function (file) {
      return fs.statSync("./public/huds/" + file).isDirectory();
    });

    let instance = req.body;
    instance.delay = !instance.delay || instance.delay < 0 ? 0 : instance.delay;

    if (!existingHUDs.includes(instance.hud)) return res.sendStatus(500);

    try {
      instance._id = shortid.generate();
      db.get("huds").push(instance).write();
      return res.status(200).json({
        id: instance._id,
      });
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  getHUDs: (req, res) => {
    if (!fs.existsSync("./public/huds")) return res.sendStatus(500);

    try {
      let existingHUDs = fs
        .readdirSync("./public/huds")
        .filter(function (file) {
          return fs.statSync("./public/huds/" + file).isDirectory();
        });

      // Удаляем HUD'ы, которых больше нет в файловой системе
      db.get("huds")
        .remove((hud) => !existingHUDs.includes(hud.hud))
        .write();

      let files = {};
      for (let i = 0; i < existingHUDs.length; i++) {
        let dirs = fs.readdirSync("./public/huds/" + existingHUDs[i] + "/");
        files[existingHUDs[i]] = dirs;
      }

      const instances = db.get("huds").value();

      return res.status(200).json({
        huds: existingHUDs,
        instances: instances,
        files: files,
      });
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  setHUD: (req, res) => {
    const data = req.body;

    if (!data.id || data.enabled == null || !data.name || data.delay == null) {
      return res.sendStatus(500);
    }

    try {
      db.get("huds")
        .find({ _id: data.id })
        .assign({
          enabled: data.enabled,
          name: data.name,
          delay: data.delay || 0,
        })
        .write();

      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  deleteHUD: (req, res) => {
    const id = req.body.id;

    try {
      const removed = db.get("huds").remove({ _id: id }).write();

      if (!removed || removed.length !== 1) {
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  render: (req, res) => {
    const config = module.exports.loadConfig();
    const id = req.params.id;

    try {
      const hud = db.get("huds").find({ _id: id }).value();

      if (!hud) return res.sendStatus(500);
      if (!hud.enabled) return res.redirect("/#huds");

      if (
        !fs.existsSync("./public/huds/default") ||
        !fs.existsSync("./public/huds/" + hud.hud + "/template.pug")
      ) {
        return res.sendStatus(500);
      }

      const hud_dir = "/huds/" + hud.hud + "/index.js";
      const css_dir = "/huds/" + hud.hud + "/style.css";
      const anim_dir = "/huds/" + hud.hud + "/animate.css";

      return res.render("../public/huds/" + hud.hud + "/template.pug", {
        ip: config.Address,
        port: config.ServerPort,
        print_player_data: config.PrintPlayerData,
        display_avatars: config.DisplayAvatars,
        display_player_avatars: config.DisplayPlayerAvatars,
        display_team_flags: config.DisplayTeamFlags,
        display_player_flags: config.DisplayPlayerFlags,
        special_event: config.SpecialEvent,
        left_image: config.LeftImage,
        left_image2: config.LeftImage2,
        left_image3: config.LeftImage3,
        leftOneImage: config.LeftOneImage,
        displayOnlyMainImage: config.DisplayOnlyMainImage,
        displayScoreboard: config.DisplayScoreboard,
        displayRadar: config.DisplayRadar,
        left_primary: config.LeftPrimary,
        left_secondary: config.LeftSecondary,
        right_image: config.RightImage,
        right_primary: config.RightPrimary,
        right_secondary: config.RightSecondary,
        hud: hud_dir,
        css: css_dir,
        anim: anim_dir,
        hud_path: hud.hud,
        delay: hud.delay > 0 ? hud.delay : 0,
      });
    } catch (err) {
      console.error("Error in render:", err);
      return res.sendStatus(500);
    }
  },

  overlay: (req, res) => {
    return res.render("list.pug");
  },
};

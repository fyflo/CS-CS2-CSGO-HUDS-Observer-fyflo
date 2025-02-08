const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const fs = require("fs");
const shortid = require("shortid");
const address = require("ip").address();

// Инициализация базы данных
const adapter = new FileSync("./databases/teams.json");
const db = low(adapter);
db.defaults({ teams: [] }).write();

module.exports = {
  getTeams: (req, res) => {
    try {
      const teams = db.get("teams").value();
      res.setHeader("Content-Type", "application/json");
      return res.json({
        teams: teams,
      });
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  addTeam: (req, res) => {
    try {
      let team = req.body;
      delete team._id;

      if (req.file) {
        team.logo = req.file.filename;
      }

      team._id = shortid.generate();
      db.get("teams").push(team).write();

      return res.status(200).json({
        id: team._id,
      });
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  updateTeam: (req, res) => {
    try {
      let team = req.body;
      let teamId = team._id;
      delete team._id;

      const oldTeam = db.get("teams").find({ _id: teamId }).value();

      // Если есть новый файл логотипа, удаляем старый
      if (req.file) {
        team.logo = req.file.filename;
        if (oldTeam && oldTeam.logo) {
          const oldLogoPath = "./public/storage/" + oldTeam.logo;
          if (fs.existsSync(oldLogoPath)) {
            fs.unlinkSync(oldLogoPath);
          }
        }
      }

      db.get("teams")
        .find({ _id: teamId })
        .assign({
          team_name: team.team_name,
          short_name: team.short_name,
          country_code: team.country_code,
          logo: team.logo,
        })
        .write();

      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  deleteTeam: (req, res) => {
    try {
      const teamId = req.body.teamId;
      const team = db.get("teams").find({ _id: teamId }).value();

      // Удаляем файл логотипа, если он существует
      if (team && team.logo) {
        const logoPath = "./public/storage/" + team.logo;
        if (fs.existsSync(logoPath)) {
          fs.unlinkSync(logoPath);
        }
      }

      const removed = db.get("teams").remove({ _id: teamId }).write();

      if (!removed || removed.length !== 1) {
        return res.sendStatus(500);
      }
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  deleteLogo: (req, res) => {
    try {
      const teamId = req.body.teamId;
      const team = db.get("teams").find({ _id: teamId }).value();

      // Удаляем файл логотипа, если он существует
      if (team && team.logo) {
        const logoPath = "./public/storage/" + team.logo;
        if (fs.existsSync(logoPath)) {
          fs.unlinkSync(logoPath);
        }
      }

      db.get("teams").find({ _id: teamId }).assign({ logo: null }).write();

      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500);
    }
  },

  render: (req, res) => {
    return res.render("teams", {
      ip: address,
      port: hud_port,
      flags: getFlags(),
    });
  },
};

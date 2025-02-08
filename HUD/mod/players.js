const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const fs = require("fs");
const shortid = require("shortid");

// Инициализация базы данных
const adapter = new FileSync("./databases/players.json");
const db = low(adapter);

// Установка значений по умолчанию, если файл пустой
db.defaults({ players: [] }).write();

exports.getPlayers = (req, res) => {
  try {
    const playerList = db.get("players").value();
    res.setHeader("Content-Type", "application/json");
    return res.json({
      players: playerList,
    });
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.addPlayer = (req, res) => {
  try {
    let user = req.body;
    delete user._id;
    user._id = shortid.generate();

    if (req.file) {
      user.avatar = req.file.filename;
    }

    db.get("players").push(user).write();

    return res.status(200).json({
      id: user._id,
    });
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.updatePlayer = (req, res) => {
  try {
    let user = req.body;
    let userId = user._id;
    delete user._id;

    // Находим существующего игрока
    const existingPlayer = db.get("players").find({ _id: userId }).value();

    if (!existingPlayer) {
      return res.sendStatus(404);
    }

    // Удаляем старый аватар если загружен новый
    if (req.file) {
      user.avatar = req.file.filename;
      if (
        existingPlayer.avatar &&
        fs.existsSync("./public/storage/" + existingPlayer.avatar)
      ) {
        fs.unlinkSync("./public/storage/" + existingPlayer.avatar);
      }
    }

    // Обновляем данные
    db.get("players")
      .find({ _id: userId })
      .assign({
        sid: user.sid,
        real_name: user.real_name,
        displayed_name: user.displayed_name,
        country_code: user.country_code,
        team: user.team,
        avatar: user.avatar,
      })
      .write();

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.deletePlayer = (req, res) => {
  try {
    const userId = req.body.userId;

    // Находим игрока перед удалением
    const player = db.get("players").find({ _id: userId }).value();

    if (!player) {
      return res.sendStatus(200);
    }

    // Удаляем файл аватара если существует
    if (player.avatar && fs.existsSync("./public/storage/" + player.avatar)) {
      fs.unlinkSync("./public/storage/" + player.avatar);
    }

    // Удаляем игрока из базы
    db.get("players").remove({ _id: userId }).write();

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.deleteAvatar = (req, res) => {
  try {
    const userId = req.body.userId;

    // Находим игрока
    const player = db.get("players").find({ _id: userId }).value();

    if (!player) {
      return res.sendStatus(200);
    }

    // Удаляем файл аватара если существует
    if (player.avatar && fs.existsSync("./public/storage/" + player.avatar)) {
      fs.unlinkSync("./public/storage/" + player.avatar);
    }

    // Обновляем запись в базе
    db.get("players").find({ _id: userId }).assign({ avatar: null }).write();

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
};

exports.render = (req, res) => {
  return res.render("players", {
    ip: address,
    port: hud_port,
    flags: getFlags(),
  });
};

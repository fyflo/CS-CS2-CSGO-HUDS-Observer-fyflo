const Datastore = require("nedb");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// Старая база данных NeDB
const oldDb = new Datastore({
  filename: "./databases/players",
  autoload: true,
});

// Новая база данных LowDB
const adapter = new FileSync("./databases/players.json");
const newDb = low(adapter);
newDb.defaults({ players: [] }).write();

// Функция миграции
function migratePlayers() {
  return new Promise((resolve, reject) => {
    oldDb.find({}, (err, players) => {
      if (err) reject(err);

      // Записываем всех игроков в новую базу
      newDb.set("players", players).write();

      console.log(`Перенесено ${players.length} игроков`);
      resolve();
    });
  });
}

// Запускаем миграцию
migratePlayers()
  .then(() => console.log("Миграция завершена успешно"))
  .catch((err) => console.error("Ошибка при миграции:", err));

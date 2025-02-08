const Datastore = require("nedb");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

// Инициализация старой БД (NeDB)
const oldDb = new Datastore({
  filename: path.join(__dirname, "../databases/teams"),
  autoload: true,
});

// Инициализация новой БД (LowDB)
const adapter = new FileSync(path.join(__dirname, "../databases/teams.json"));
const newDb = low(adapter);
newDb.defaults({ teams: [] }).write();

// Функция миграции
function migrateTeams() {
  return new Promise((resolve, reject) => {
    oldDb.find({}, (err, teams) => {
      if (err) {
        console.error("Ошибка при чтении данных из NeDB:", err);
        reject(err);
        return;
      }

      try {
        newDb.set("teams", teams).write();
        console.log(`Успешно перенесено ${teams.length} команд`);
        resolve();
      } catch (error) {
        console.error("Ошибка при записи в LowDB:", error);
        reject(error);
      }
    });
  });
}

// Запуск миграции
console.log("Начинаем миграцию команд...");
migrateTeams()
  .then(() => {
    console.log("Миграция успешно завершена");
    console.log("Новые данные:", newDb.get("teams").value());
  })
  .catch((err) => {
    console.error("Ошибка при миграции:", err);
  });

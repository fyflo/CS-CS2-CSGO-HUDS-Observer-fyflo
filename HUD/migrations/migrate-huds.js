const Datastore = require("nedb");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

console.log("Начинаем процесс миграции...");

// Путь к базам данных
const oldDbPath = path.join(__dirname, "../databases/huds");
const newDbPath = path.join(__dirname, "../databases/huds.json");

console.log("Путь к старой БД:", oldDbPath);
console.log("Путь к новой БД:", newDbPath);

// Инициализация старой БД (NeDB)
const oldDb = new Datastore({
  filename: oldDbPath,
  autoload: true,
});

// Инициализация новой БД (LowDB)
const adapter = new FileSync(newDbPath);
const newDb = low(adapter);
newDb.defaults({ huds: [] }).write();

// Функция миграции
function migrateHuds() {
  return new Promise((resolve, reject) => {
    oldDb.find({}, (err, huds) => {
      if (err) {
        console.error("Ошибка при чтении данных из NeDB:", err);
        reject(err);
        return;
      }

      try {
        console.log("\nНайдено HUD'ов:", huds.length);
        console.log("\nСтарые данные:", JSON.stringify(huds, null, 2));

        // Записываем все HUD'ы в новую базу
        newDb.set("huds", huds).write();

        console.log("\nДанные успешно записаны в новую БД");
        resolve(huds.length);
      } catch (error) {
        console.error("Ошибка при записи в LowDB:", error);
        reject(error);
      }
    });
  });
}

// Запуск миграции
migrateHuds()
  .then((count) => {
    console.log(`\nМиграция успешно завершена. Перенесено ${count} HUD'ов`);
    console.log(
      "\nНовые данные:",
      JSON.stringify(newDb.get("huds").value(), null, 2)
    );
    console.log("\nПроверьте файл huds.json в папке databases");
  })
  .catch((err) => {
    console.error("\nОшибка при миграции:", err);
  });

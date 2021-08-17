let db;
let budgetVersion;

// Create a new db request for a budget database
const request = indexedDB.open('BudgetDB', budgetVersion || 21);

request.onupgradeneeded = function (e) {
    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;

    console.log(`DB updated from version ${oldVersion} to ${newVersion}`);

    db = e.target.result;

    if (db.objectStoreNames.length === 0) {
        db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
};

request.onerror = function (e) {

}
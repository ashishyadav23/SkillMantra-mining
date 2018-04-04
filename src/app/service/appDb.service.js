(function () {
    angular.module('app')
        .service('AppIndexDbService', AppIndexDbService);
    /**@ngInject */
    function AppIndexDbService() {
        var db;
        var openRequest;
        return {
            createDb: createDb
        }

        function createDb(dbName, storeName) {
            openRequest = window.indexedDB.open(dbName, 1, function (upgradeDb) {
                console.log('making a new object store');
                if (!upgradeDb.objectStoreNames.contains(storeName)) {
                    upgradeDb.createObjectStore(storeName, { keyPath: 'name' });
                }
            });
        }
        openRequest.onsuccess = function (e) {
            console.log('running onsuccess');
            db = e.target.result;
            addItem();
        };
        openRequest.onerror = function (e) {
            console.log('onerror!');
            console.dir(e);
        };
        function addItem() {
            var transaction = db.transaction(['store'], 'readwrite');
            var store = transaction.objectStore('store');
            var item = {
                name: 'banana',
                price: '$2.99',
                description: 'It is a purple banana!',
                created: new Date().getTime()
            };

            var request = store.add(item);

            request.onerror = function (e) {
                console.log('Error', e.target.error.name);
            };
            request.onsuccess = function (e) {
                console.log('Woot! Did it');
            };

        }
    }

})();
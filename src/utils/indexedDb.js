const DB_NAME = "myApp";
const OBJECT_STORE_NAME = "authentication";

export const openIndexedDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: "id",
      });
      objectStore.createIndex("token", "token", { unique: true });
    };
  });
};

export const storeToken = async (token) => {
  const db = await openIndexedDB();
  const transaction = db.transaction([OBJECT_STORE_NAME], "readwrite");
  const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

  const request = objectStore.put({ id: 1, token });

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const retrieveToken = async () => {
  const db = await openIndexedDB();
  const transaction = db.transaction([OBJECT_STORE_NAME], "readonly");
  const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

  const request = objectStore.get(1);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result ? request.result.token : null);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const clearToken = async () => {
  const db = await openIndexedDB();
  const transaction = db.transaction([OBJECT_STORE_NAME], "readwrite");
  const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

  const request = objectStore.delete(1);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

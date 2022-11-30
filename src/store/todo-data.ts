const TODO_STORAGE_KEY = "todos";

const getLocalStorageData = () => {
  try {
    const data = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || "");

    return data;
  } catch {
    return [];
  }
};

export const todoData = getLocalStorageData();

// TODO ADD BOTTOM FUNCTION

export const getToDoItemsFromLocalStorage = () => {
  const storageValue = localStorage.getItem(TODO_STORAGE_KEY) || "";

  let todoItems = null;

  try {
    const storageValueJSON = JSON.parse(storageValue);

    if (Array.isArray(storageValueJSON)) {
      todoItems = storageValueJSON;
    }
  } catch (e) {
    todoItems = [];
  }

  return todoItems;
};

export const saveTodoItemsToLocalStorage = (storageValue: object) => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(storageValue));
};

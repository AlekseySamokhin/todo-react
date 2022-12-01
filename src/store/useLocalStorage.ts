export const TODO_STORAGE_KEY = "todos";

export const getTodoItemsFromLocalStorage = () => {
  try {
    const storageValue = JSON.parse(
      localStorage.getItem(TODO_STORAGE_KEY) || ""
    );

    return storageValue;
  } catch {
    return [];
  }
};

export const saveTodoItemsToLocalStorage = (storageValue: object) => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(storageValue));
};

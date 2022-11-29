const TODO_STORAGE_KEY = "todos";

const getLocalStorageData = () => {
  try {
    const data = JSON.parse(localStorage.getItem(TODO_STORAGE_KEY));

    return data || [];
  } catch {
    return [];
  }
};

export const todoData = getLocalStorageData();

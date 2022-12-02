export interface ITodosState {
  todos: ITodoItem[];
  isCompletedAll: boolean;
  todosFilter: FilterTypes;
}

export interface ITodoItem {
  title: string;
  completed: boolean;
  id: string;
}

export type FilterTypes = "all" | "completed" | "active";

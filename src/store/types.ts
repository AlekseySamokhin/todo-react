export interface ITodosState {
  todos: ITodoItem[];
  todosFilter: FilterTypes;
  error: undefined | string | unknown;
}

export interface ITodoItem {
  title: string;
  completed: boolean;
  id: number;
}

export type FilterTypes = "all" | "completed" | "active";

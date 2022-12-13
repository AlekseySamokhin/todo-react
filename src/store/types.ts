export interface ITodosState {
  todos: ITodoItem[];
  todosFilter: FilterTypes;
}

export interface ITodoItem {
  title: string;
  completed: boolean;
  id: number;
}

export type FilterTypes = "all" | "completed" | "active";

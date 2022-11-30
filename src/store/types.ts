export interface TodosState {
  todos: TodoItem[];
  isCompletedAll: boolean;
  todosFilter: FilterTypes;
}

export interface TodoItem {
  title: string;
  completed: boolean;
  id: string;
}

export type FilterTypes = "all" | "completed" | "active";

export type TodosState = {
  fetched: boolean;
  fetching: boolean;
  error: TodosError;
  allIds: string[];
  byId: {
    [key: string]: Todo;
  };
  selected: string | null;
  form: TodoForm;
};

export type TodosError = string;

export interface Todo {
  _id: string;
  title: string;
  description: string;
  userid: string;
  createdOn: string;
  updatedOn: string;
  status: TodoStatus;
};

export type TodoForm = Pick<Todo, | 'status' | 'title' | 'description'>;

export enum TodoStatus {
  Todo,
  Doing,
  Done,
  Archived,
}
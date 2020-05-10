export type TodosState = {
    fetched: boolean;
    fetching: boolean;
    error: TodosError;
    allIds: string[];
    byId: {
        [key: string]: Todo;
    };
    selected: string | null;
    form: {
        [key: string]: Todo;
    };
}

export type TodosError = string;

export type Todo = {
    _id: string;
    title: string;
    description: string;
    userid: string
    createdOn: string,
    updatedOn: string,
    status: TodoStatus,
}

export enum TodoStatus {
    Todo,
    Doing,
    Done,
    Archived,
}
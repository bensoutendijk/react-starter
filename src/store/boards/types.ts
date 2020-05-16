export type BoardsState = {
  fetched: boolean;
  fetching: boolean;
  error: BoardsError;
  allIds: string[];
  byId: Partial<{
    [key: string]: Board;
  }>;
  form: Partial<{
    [key: string]: BoardForm;
  }>;
};

export type BoardsError = string;

export interface Board {
  _id: string;
  title: string;
  createdOn: Date;
  updatedOn: Date;
  members: { 
    id: string; 
    scopes: string[];
  }[];
  categories: string[];
  cards: string[];
  archived: boolean;
}

export type BoardForm = Pick<Board, '_id' | 'title' >;
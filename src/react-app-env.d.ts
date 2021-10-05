// eslint-disable-next-line
/// <reference types="react-scripts" />

type Todo = {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  title: string;
  completed: boolean;
};

type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type RootState = {
  startTodos: Todo[],
  visualizedTodos: Todo[],
  selectedUserId: number,
  activeTodoId: number,
  filterQuery: string,
  typeOfTodos: string,
  user: null | User,
};

type Filter = {
  typeOfTodos: string,
  filterQuery: string,
}
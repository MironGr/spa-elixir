export interface State {
  cards: Cards,
}

export type Cards = {
  cards: Elixir[],
  loader: boolean,
}

export interface Action<T> {
  type: string,
  payload?: T,
}

export type Elixir = {
  id: string,
  name: string,
  effect: string,
  ingredients: Ingredient[],
  removed: boolean,
  like: boolean,
  color?: string,
}

export type Ingredient = {
  id: string,
  name: string,
}


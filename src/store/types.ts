export interface State {
  cards: {
    cards: Elixir[]
  }
}

export interface Action {
  type: string,
  payload?: any,
}

export interface ResponseCardList extends Response {}

export interface Elixir {
  id: string,
  name: string,
  effect: string,
  ingredients: Ingredient[],
}

export interface Ingredient {
  id: string,
  name: string,
}


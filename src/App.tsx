import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { getCards } from 'src/store/cards/action'
import { Card } from 'src/card/Card'
import { State, Elixir } from 'src/store/types'

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const elixirs = useSelector<State, Elixir[]>(state => state.cards.cards)

  useEffect(() => {
    dispatch(getCards())
  }, [])
  // const clickHandler = () => {
  //   console.log('Click')
  //   dispatch(getCards())
  // }

  return (
    <div>
      <h1>Elixirs</h1>
      {/* <button
        onClick={clickHandler}
      > 
        get data
      </button> */}
      {elixirs.map(
        elixir => <div className='card-wrapper'>
          <Card 
            id={elixir.id}
            name={elixir.name} 
            effect={elixir.effect}
            ingredients={elixir.ingredients}
          />
          </div>
      )}
    </div>
  );
}

export default App;

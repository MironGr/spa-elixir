import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import './App.css';

import { getCards } from 'src/store/cards/action'
import { Card } from 'src/card/Card'
import { State, Elixir } from 'src/store/types'

export const App: React.FC = () => {
  const dispatch = useDispatch()
  const [isFilter, setFilter] = useState<boolean>(false)
  const elixirs = useSelector<State, Elixir[]>(state => state.cards.cards)
  const loader = useSelector<State, boolean>(state => state.cards.loader)

  const [likeElixirsList, setLikeElixirsList] = useState<Elixir[]>([])
  const [filtredElixirs, setFiltredElixirs] = useState<Elixir[]>([])

  useEffect(() => {
    dispatch(getCards())
  }, [])
  
  useEffect(() => {
    setLikeElixirsList(elixirs.filter(item => item.like && !item.removed))
    if(isFilter) {
      setFiltredElixirs(elixirs.filter(item => item.like && !item.removed))
    } else {
      setFiltredElixirs(elixirs)
    }
  }, [elixirs, isFilter])

  const handleFilter = () => {
    setFilter(!isFilter)
  }

  return (
    <div className='root'>
      <h1>Elixirs</h1>
      <h3>You like {likeElixirsList.length} elixirs</h3>
      <button
        className={cx(
          'filter-button',
          {'filter-button-activate': isFilter}
          )}
        onClick={handleFilter}
      >
        Show only liked elixirs
      </button>
      {loader && <div className='no-elixirs'>Loading...</div>
      || filtredElixirs.length && filtredElixirs.map(
        elixir => <div className='card-wrapper' key={elixir.id}>
          <Card 
            id={elixir.id}
            name={elixir.name} 
            effect={elixir.effect}
            ingredients={elixir.ingredients}
            removed={elixir.removed}
            like={elixir.like}
            color={elixir.color}
          />
        </div>
      ) 
      || likeElixirsList.length === 0 && <div className='no-elixirs'>You dont have liked elixirs :(</div>}
    </div>
  );
}

export default App;

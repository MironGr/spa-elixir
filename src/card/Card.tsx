import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import cx from 'classnames'

import 'src/card/card.css'

import { setLike, setRemove } from 'src/store/cards/action'
import { Elixir } from 'src/store/types'
import { Flask } from 'src/icons/Flask'
import { Garbage } from 'src/icons/Garbage' 
import { Like } from 'src/icons/Like'


interface Props extends Elixir {}

export const Card: React.FC<Props> = ({
  id,
  name,
  effect,
  ingredients,
  like,
  removed,
  color,
}) => {

  const dispatch = useDispatch()
  const [startRemove, setStartRemove] = useState(false)

  const handleLike = () => {
    dispatch(setLike(id))
  }

  const handleRemove = () => {
    setStartRemove(true)
    setTimeout(() => dispatch(setRemove(id)), 300)
  }

  return <div className={cx('card', {'card-remove': startRemove})} 
    style={removed ? { display: "none" } : {}}
    >
    <div className='card-text'>
      <div className='card-icon'>
        <Flask color={like ? color : ''} />
      </div>
      <div className='card-description'>
        <div className='card-name'>
          {name}
        </div>
        <div className='card-effect'>
          {effect}
        </div>
        <div className='card-ingredients-wrapper'>
          Ingredients: 
          {ingredients.map(ingred => <div className='card-ingredient' key={ingred.id}>
            - {ingred.name}
          </div>)} 
        </div>
      </div>
    </div>
    <div className='card-buttons'>
      <div 
        className='card-garbage'
        onClick={handleRemove}
      >
        <Garbage />
      </div>
      <div 
        className='card-like'
        onClick={handleLike}
      >
        <Like like={like}/>
      </div>
    </div>
  </div>
}
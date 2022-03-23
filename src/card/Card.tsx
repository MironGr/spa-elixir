import React from 'react'

import 'src/card/card.css'

import { Elixir } from 'src/store/types'
import { Flask } from 'src/isons/Flask' 

interface Props extends Elixir {}

export const Card: React.FC<Props> = ({
  id,
  name,
  effect,
  ingredients
}) => {

  // const ingredientsList = 

  return <div className='card'>
    <div className='card-icon'>
      <Flask />
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
        {ingredients.length <= 3 && ingredients.map(ingred => <div className='card-ingredient'>
          - {ingred.name}
        </div>)}
        {ingredients.length > 3 && ingredients.slice(0, 3).map(ingred => <div className='card-ingredient'>
          - {ingred.name}
        </div>)}
        {ingredients.length > 3 && 
          <div className='card-spread'>
            - ...
          </div>} 
      </div>
    </div>
    <div className='card-buttons'>
      <div>
        Like
      </div>
      <div>
        Remove
      </div>
    </div>
  </div>
}
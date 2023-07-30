import React from 'react'
import { StyledCard } from './styles/card.styled'


export default function Card({item: {id, title, body, image}}) {
    console.log(image)
  return (
    <StyledCard layout={ (id % 2 === 0) && 'row-reverse'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt='Card viusal' />
        </div>
    </StyledCard>
  )
}

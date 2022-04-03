import React from 'react'

type Props = {
  like: boolean
}

export const Like: React.FC<Props> = ({
  like
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48"
    >
      <path 
        d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
        fill={like ? '#E66761' : 'none'}
        stroke={like ? '#E66761' : 'black'}
        strokeWidth='2px'
      />
    </svg>
  )
}
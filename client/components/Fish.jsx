import React from 'react'
import {Link} from 'react-router-dom'

export default function Fish (props) {
  return (
    <li>
      <Link to={`/fish/${props.fishData.id}`}>
        {props.fishData.name}
      </Link>
    </li>
  )
}

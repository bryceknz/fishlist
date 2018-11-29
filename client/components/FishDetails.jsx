import React from 'react'

export default function FishDetails (props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <div>{props.description}</div>
      <img src={props.image_URL} />
      <button onClick={() => history.back()}>Back</button>
    </React.Fragment>
  )
}

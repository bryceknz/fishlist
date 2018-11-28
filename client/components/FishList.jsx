import React from 'react'
import { connect } from 'react-redux'

import { getFish, getSortedFish } from '../actions'
import Fish from './Fish'

class FishList extends React.Component {
  componentDidMount () {
    this.props.getFish()
  }

  render () {
    if (this.props.info.pending) {
      return <div>LOADING...</div>
    }

    return (
      <React.Fragment>
        {this.props.info.error && <div>{this.props.info.error}</div>}
        <ul>
          {this.props.fish.map(fish =>
            <Fish key={fish.id} fishData={fish} />)}
        </ul>
        <button onClick={() => this.props.getSortedFish()}>Sort fish</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    fish: state.fish,
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => dispatch(getFish()),
    getSortedFish: () => dispatch(getSortedFish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishList)

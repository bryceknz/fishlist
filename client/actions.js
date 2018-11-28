import request from 'superagent'

export function getFishPending () {
  return {
    type: 'GET_FISH_PENDING'
  }
}

export function getFishSuccess (fish) {
  return {
    type: 'GET_FISH_SUCCESS',
    fish
  }
}

export function getFishError (message) {
  return {
    type: 'GET_FISH_ERROR',
    message
  }
}

export function getFish () {
  return dispatch => {
    dispatch(getFishPending())

    request
      .get('/api/v1/fish')
      .then(res => dispatch(getFishSuccess(res.body)))
      .catch(err => dispatch(getFishError(err.message)))
  }
}

export function getSortedFish () {
  return dispatch => {
    dispatch(getFishPending())

    request
      .get('/api/v1/fish')
      .then(res => {
        const sortedFish = res.body.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
        res.body = sortedFish
        return res
      })
      .then(res => dispatch(getFishSuccess(res.body)))
      .catch(err => dispatch(getFishError(err.message)))
  }
}

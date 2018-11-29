import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Container} from 'semantic-ui-react'

import FishList from './FishList'
import FishDetails from './FishDetails'
import TopMenu from './TopMenu'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route path='/' component={TopMenu} />
          <Container style={{marginTop: 75}}>
            <Switch>
              <Route exact path='/' component={FishList} />
              <Route path='/fish/:fishId' component={FishDetails} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    )
  }
}

export default App

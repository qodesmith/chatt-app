import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatPane from './ChatPane'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  // React error handling!
  componentDidCatch(error) {
    this.setState({ error })
    console.log(error)
  }

  render() {
    const { users } = this.props

    if (this.state.error) {
      return (
        <div className='ph4'>
          <h2>Uh oh!</h2>
          <p>Looks like the client has encountered a problem.</p>
          <p>
            Please refresh your browser and try again.
            If this issue persists, scream and run around like you're on fire.
            Or, check the console and see what was logged. I mean either one is fine.
          </p>
        </div>
      )
    }

    if (!users || !users.length) return null // TODO: make this a loader, or something fancy.
    return (
      <div className='df'>
        { users.map(({ id }) => <ChatPane key={id} id={id} />) }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users: users.loggedIn })

export default connect(mapStateToProps)(App)

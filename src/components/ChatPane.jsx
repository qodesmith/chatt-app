import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { throttle, debounce } from 'lodash'
import { startTyping, endTyping } from 'actions'


class ChatPane extends Component {
  constructor(props) {
    super(props)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.whosTyping = this.whosTyping.bind(this)
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight
  }

  whosTyping() {
    const { usersTyping, users } = this.props
    return usersTyping
      .map(id => users.find(user => user.id === id))
      .map(({ id, name }) => (
        <span className='mr2' key={id}>
          <span className='b'>{name}</span> is typing
        </span>
      ))
  }

  render() {
    const { usersTyping, id, typingStart, typingEnd } = this.props

    return (
      <div className='vh-100 pa3 df flex-col flex-grow-1'>
        <div ref={div => this.chatWindow = div} className='chat-window pa3 h-100 overflow-x-s'>

        </div>
        <input
          className='chat-bar db pa3 w-100 f-1em ba-0'
          type='text'
          placeholder='Type your message here'
          onChange={() => { typingStart(); typingEnd() }}
        />
        <div className='pl3 pt1 darkgray'>
          {/* Use `&nbsp;` to keep the height when there's no text. */}
          <small>
            { usersTyping.length ? this.whosTyping() : <span>&nbsp;</span> }
          </small>
        </div>
      </div>
    )
  }
}

//                     (storeState, ownProps)
const mapStateToProps = ({ users }, { id }) => ({
  usersTyping: users.typing.filter(typingId => typingId !== id),
  users: users.loggedIn
})

//                         (dispatch, ownProps)
const mapDispatchToProps = (dispatch, { id }) => ({
  typingStart: () => dispatch(startTyping(id)),

  // TODO: figure out the correct way to throttle starting typing.
  // typingStart: throttle(() => console.log('Starting'), 600),
  typingEnd: debounce(() => dispatch(endTyping(id)), 500)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPane)

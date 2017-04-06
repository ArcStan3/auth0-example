import React, { Component } from 'react'
import { connect } from 'react-redux'

const App = props => {
  return (
    <div className='pa4'>
      <h1>Auth0 Example</h1>
      {
        props.auth
          ? <button onClick={e => {
            props.dispatch({type: 'CLEAR_AUTH'})
            props.dispatch({type: 'CLEAR_USER'})
          }}>Log out</button>
          : <button onClick={e => props.lock.show()}>Login</button>
      }
      {props.auth && (
      <div>
        <img src={props.user.picture} />
        <h2>Welcome {props.user.nickname}</h2>
      </div>
          )}
    </div>
  )
}

const connector = connect(state => state)

export default connector(App)

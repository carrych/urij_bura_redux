import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { year, photo } = this.props.page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Top photo</h1>
        </header>
        <p className="App-intro">PHOTO</p>
        <p>My name is:{name}</p>
        <p>
          Year: {year}, photo: {photo}
        </p>
      </div>
    )
  }
}
const mapStateToProps = ({ user: name, page: { year, photo } }) => {
  return {
    user: name,
    page: {
      year,
      photo,
    },
  }
}

export default connect(mapStateToProps)(App)

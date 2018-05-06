import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { withStore } from './store'

class App extends Component {
  render() {
    let store = this.props.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="Sample-form">
          <h3>A Sample Form</h3>
          <h4>Try typing!</h4>
          <form action="#">
            <label>
              First Name:
              <TextInput onChange={store.set('firstName')} value={store.get('firstName')} />
            </label>
            <label>
              Last Name:
              <TextInput onChange={store.set('lastName')} value={store.get('lastName')} />
            </label>
            <label>
              Favorite Number:
              <RangeInput onChange={store.set('favoriteNumber')} value={store.get('favoriteNumber')} />
            </label>
          </form>
        </section>
        <section className="Store-contents">
          <h3>Undux store contents</h3>
          <h4>This updates when the form updates</h4>
          <pre>{JSON.stringify(store.getState(), null, 2)}</pre>
        </section>
      </div>
    );
  }
}

function TextInput(props) {
  return <input
    onChange={e => props.onChange(e.target.value)}
    type="string"
    value={props.value}
  />
}

function RangeInput(props) {
  return <input
    max={100}
    min={0}
    onChange={e => props.onChange(parseInt(e.target.value, 10))}
    type="range"
    value={props.value}
  />
}

export default withStore(App);

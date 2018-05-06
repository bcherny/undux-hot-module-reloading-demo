import { connect, createStore } from 'undux'
import { effects, withEffects } from './effects'

let plainStore = createStore({
  firstName: '',
  lastName: '',
  favoriteNumber: 10,
  fullName: ''
})

export let store = withEffects(plainStore)

export let withStore = connect(store)

if (module.hot) {
  module.hot.accept('./effects.js', () => {
    const { withEffects } = require('./effects.js');

    // Unsubscribe old effects
    effects.forEach(_ => _.unsubscribe())

    // Subscribe new effects
    store = withEffects(plainStore)
  });
}
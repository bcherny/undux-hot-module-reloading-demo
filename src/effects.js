import { combineLatest } from 'rxjs'
import { startWith } from 'rxjs/operators'

export let effects = []

export function withEffects(store) {
  effects = [
    combineLatest(
      store
        .on('firstName')
        .pipe(startWith(store.get('firstName'))),
      store
        .on('lastName')
        .pipe(startWith(store.get('lastName')))
    )
    .subscribe(([first, last]) =>
      store.set('fullName')(
        capitalize(first) + ' ' + capitalize(last)
      )
    )
  ]

  return store
}

function capitalize(string) {
  return string.slice(0, 1).toUpperCase()
    + string.slice(1)
}
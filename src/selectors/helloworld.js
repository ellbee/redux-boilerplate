import { createSelector } from 'reselect';

const helloSelector = (state) => state.helloWorld;

export const upperHelloSelector = createSelector(
  helloSelector,
  (hello) => ({
    helloWorld: hello,
    upper: hello.get('name').toUpperCase()
  })
);

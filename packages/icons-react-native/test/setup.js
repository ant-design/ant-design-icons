jest.mock(
    'react-native',
    () => {
      /*
       * Custom implementation of a module that doesn't exist in JS,
       * like a generated module or a native module in react-native.
       */
      return {
        Text: ''
      }
    },
    {virtual: true},
);

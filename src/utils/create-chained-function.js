export function createChainedFunction(...functions) {
  return functions.reduce(
    (accumulator, func) => {
      if (typeof func !== 'function') {
        return accumulator;
      }
      return function chainedFunction(...args) {
        accumulator.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {},
  );
}

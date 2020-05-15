import { createChainedFunction } from './create-chained-function';

describe('createChainedFunction', () => {
  test('should return function when called without args', () => {
    expect(createChainedFunction()).toBeInstanceOf(Function);
  });
  test('should call functions in correct order', () => {
    const obj = { func: () => {}, func2: () => {}, func3: () => {} };
    const spy1 = jest.spyOn(obj, 'func');
    const spy2 = jest.spyOn(obj, 'func2');
    const spy3 = jest.spyOn(obj, 'func3');

    const chained = createChainedFunction(obj.func, obj.func2, obj.func3);
    chained();
    const order1 = spy1.mock.invocationCallOrder[0];
    const order2 = spy2.mock.invocationCallOrder[0];
    const order3 = spy3.mock.invocationCallOrder[0];

    expect(order1).toBeLessThan(order2);
    expect(order2).toBeLessThan(order3);
  });
  test('should ignore non-function arguments', () => {
    const obj = { func: () => {}, func2: () => {} };
    const spy1 = jest.spyOn(obj, 'func');
    const spy2 = jest.spyOn(obj, 'func2');

    const chained = createChainedFunction(
      'hello',
      obj.func,
      null,
      obj.func2,
      undefined,
      123,
    );
    chained();
    const order1 = spy1.mock.invocationCallOrder[0];
    const order2 = spy2.mock.invocationCallOrder[0];

    expect(order1).toBeLessThan(order2);
  });
});

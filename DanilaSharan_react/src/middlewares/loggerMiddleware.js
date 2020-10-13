export const loggerMiddleware = store => next => action => {
  console.log('Action:', action)
  console.log('Store (before):', store.getState());
  const result = next(action);
  console.log('Store (after):', store.getState());
  console.log('Result:', result);
  return result;
};

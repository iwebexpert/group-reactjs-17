export const loggerMiddleware = store => next => action => {
    console.group('--- logger ---')
    console.log('action', action);
    console.log('store before', store.getState());
    const result = next(action);
    console.log('store after', store.getState());
    console.log('result', result);
    console.groupEnd();
    return result;
}
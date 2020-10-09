// export function loggerMiddleware(store){
//     return function wrapDispatch(next){
//         return function dispatchFunc(action){
//             console.group('---loggerMiddleware---');
//             console.log('Action:', action);
//             console.log('Store (before):', store.getState());

//             const result = next(action);

//             console.log('Store (after):', store.getState());
//             console.log('Result:', result);
//             console.groupEnd();

//             return result;
//         }
//     }
// };

export const loggerMiddleware = store => next => action => {
    console.group('---loggerMiddleware---');
            console.log('Action:', action);
            console.log('Store (before):', store.getState());
            const result = next(action);
            console.log('Store (after):', store.getState());
            console.log('Result:', result);
            console.groupEnd();
            return result;
};
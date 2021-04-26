import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '@App/store/root-reducer';
import initSaga from '@App/store/sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware().concat(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(initSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

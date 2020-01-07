import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducer =>
  persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducer
  );

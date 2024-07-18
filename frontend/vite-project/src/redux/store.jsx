import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import tweetSlice from "./tweetSlice";
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  user: userSlice,
  tweet: tweetSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // ignore the PERSIST action type from redux-persist
      },
    }),
});

let persistor = persistStore(store);

export { store, persistor }; // Export store and persistor separately if needed
export default store; // Export the store as default if you're not using persistor separately




// import {configureStore,combineReducers} from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import tweetSlice from "./tweetSlice";

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'
//   import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }

// const rootReducer = combineReducers({
//     user:userSlice,
//     tweet:tweetSlice,
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer:persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export default store;
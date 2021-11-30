import { configureStore } from "@reduxjs/toolkit";

import { gamesApis } from "@features/games/games.slice";

export const mainStore = configureStore({
    reducer: {
        [gamesApis.reducerPath]: gamesApis.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        gamesApis.middleware,
    ],
});

export type MainStore = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;

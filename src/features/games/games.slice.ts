import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@core/apis/base";

export type GameType = "updated" | "rating" | "name";
export type GameTypeOrder = GameType | `-${GameType}`;

export const gamesApis = createApi({
    baseQuery: baseQuery,
    endpoints: (build) => ({
        getGames: build.query<any[], GameTypeOrder>({
            query: (type = "updated") => `/?ordering=${type}`,
        }),
    }),
});

export const { useGetGamesQuery } = gamesApis;

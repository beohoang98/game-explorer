import { api } from "@core/apis/base";

export type GameType = "updated" | "rating" | "name";
export type GameTypeOrder = GameType | `-${GameType}`;

export const gamesApis = api.injectEndpoints({
    endpoints: (build) => ({
        getGames: build.query<SearchResult<any>, GameTypeOrder>({
            query: (type = "updated") =>
                `/games?ordering=${type}&key=${process.env.REACT_APP_RAWG_API_KEY}`,
        }),
    }),
});

export const { useGetGamesQuery } = gamesApis;

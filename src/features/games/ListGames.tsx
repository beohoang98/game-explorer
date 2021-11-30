import { FC } from "react";

import { useGetGamesQuery } from "@features/games/games.slice";
import { GameListItem } from "@features/games/components/GameListItem";

export const ListGames: FC<any> = () => {
    const { data, error, isLoading } = useGetGamesQuery("updated");

    if (isLoading) {
        return <h3>Loading</h3>;
    }

    if (error) {
        return <h3>Error: {error}</h3>;
    }

    if (!data) {
        return null;
    }

    return (
        <div>
            {data.results.map((game, idx) => (
                <GameListItem game={game} key={idx} />
            ))}
        </div>
    );
};

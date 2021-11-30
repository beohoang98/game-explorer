import { FC } from "react";

import { useGetGamesQuery } from "@features/games/games.slice";
import { GameListItem } from "@features/games/components/GameListItem";

export const ListGames: FC = () => {
    const { data, error, isLoading } = useGetGamesQuery("updated");

    if (isLoading) {
        return <h3>Loading</h3>;
    }

    if (error) {
        return <h3>Error: {error}</h3>;
    }

    return (
        <div>
            {data?.map((game, idx) => (
                <GameListItem game={game} key={idx} />
            ))}
        </div>
    );
};

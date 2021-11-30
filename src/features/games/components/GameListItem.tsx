import { FC } from "react";
import styled from "styled-components";

interface GameListItemProps {
    game: any;
    className?: string;
}

export const BaseGameListItem: FC<GameListItemProps> = ({
    game,
    className,
}) => {
    return (
        <div className={className}>
            <div className={className + "-thumbnail"}>
                <img src={game.short_screenshots[0].image} alt="" />
            </div>
            <div className={className + "-body"}>
                <h2>{game.name}</h2>
            </div>
        </div>
    );
};

export const GameListItem = styled(BaseGameListItem)`
    margin: 1em;
    display: flex;
    flex-direction: row;
    background: #dfdfdf;

    &-thumbnail {
        flex: 0 0 auto;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
    }

    &-body {
        flex: 1 1 auto;
        padding: 1em;
    }
`;

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
            <div className={className + "-thumbnail"}></div>
            <div className={className + "-body"}></div>
        </div>
    );
};

export const GameListItem = styled(BaseGameListItem)`
    padding: 1em;
    display: flex;
    flex-direction: row;

    &-thumbnail {
        flex: 0 0 auto;
    }

    &-body {
        flex: 1 1 auto;
    }
`;

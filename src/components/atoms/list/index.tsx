import React, {FC} from 'react';
import {ListItem} from '../../elements';
import styled from 'styled-components';

interface ListProps{
    items: string[];
    ordered: boolean;
    type: string;
}

export const List: FC<ListProps> = ({items, ordered, type}) => {

    const listStyle: string = `
        list-style-type: ${type};
        font-size: 1em;
        color: var(--primaryFont);
        padding: 0 0 0 20px;
    `
    const ListCore = ordered ? styled.ol`${listStyle}` : styled.ul`${listStyle}`;

    const renderList = items.map((item, i) => <li><ListItem key={i}>{item}</ListItem></li>)

    return(
        <ListCore>
            {renderList}
        </ListCore>
    )
}
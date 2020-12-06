import React, {FC} from 'react';
import {Cloud} from '../../atoms';
import styled from 'styled-components';
import CloudItems from '../../../types/cloudItems';

interface CloudHeroProps{
    items: CloudItems[];
}

const StartHeroCore = styled.div`
    display: flex;
    flex-direction: column;
    width: 960px;
    padding: 20px;
    @media(max-width: 1000px){
        max-width: calc(100% - 40px);
    }
`;

export const StartHero: FC<CloudHeroProps> = ({items}) => {

    const renderItems = items.map((item, i) => <Cloud key={i} secondary={item.secondary}>{item.content}</Cloud>)
    return(
        <StartHeroCore>
            {renderItems}
        </StartHeroCore>
    )
}

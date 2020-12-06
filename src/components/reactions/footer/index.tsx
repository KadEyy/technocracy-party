import React, {FC} from 'react';
import styled from 'styled-components';
import datefromat from 'dateformat';
import {Copyrights, StyledExternal} from '../../elements';

const year = datefromat(new Date(), 'yyyy');

const FooterCore = styled.footer`
    width: 100%;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    min-height: 69px;
    border: solid var(--first);
    border-width: 1px 0 0 0;
`;

const OpenSource = styled.span`
    text-align: center;
    font-size: 0.7em;
    margin-top: 5px;
`;

export const Footer: FC = () =>{
    return(
        <FooterCore>
            <Copyrights>
                Copyright © {year === '2020' ? '2020' : `2020 - ${year}`} | Jakub Mizera {'&'} Debatawka Technocratic Party
            </Copyrights>
            <OpenSource>
                Open source on <StyledExternal target='_blank' href="https://github.com/KadEyy/technocracy-party">Github</StyledExternal> with 💖!
            </OpenSource>
        </FooterCore>
    )
}
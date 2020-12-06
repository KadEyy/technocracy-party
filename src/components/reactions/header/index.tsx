import React, {FC} from 'react';
import styled from 'styled-components';
import {Nav} from '../../atoms'
import NavArray from './navArray';
import Logo from '../../../../public/img/logo.png';

const LogoImg = styled.img`
    height: 70px;
`;

const HeaderCore = styled.header`
    display: flex;
    flex-direction: row;
    width: calc(100% - 60px);
    padding: 0 30px;
    justify-content: center;
    height: 79px;
    position: fixed;
    top: 0;
    z-index: 9;
    & > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
        @media (max-width: 1000px) {
            max-width: 1000px;
        }
    }
`;

export const Header: FC = () => {
    return(
        <HeaderCore>
            <div>
                <LogoImg src={Logo}/>
                <Nav items={NavArray}/>
            </div>
        </HeaderCore>
    )
}


import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Nav} from '../../atoms'
import NavArray from './navArray';
import Logo from '../../../../public/img/logo.png';
import {Sidebar} from '../../atoms';

const LogoImg = styled.img`
    height: 70px;
`;

const HamburgerIcon = styled.div`
    width: 27px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    & > span{
        width: 100%;
        height: 3px;
        background: var(--primaryFont);
    }
    @media(min-width: 1000px){
        display: none;
    }
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

    const [mobile, setMobile] = useState<boolean>(false);

    return(
        <HeaderCore>
            <div>
                <LogoImg src={Logo}/>
                <Nav items={NavArray}/>
                <HamburgerIcon onClick={() => setMobile(!mobile)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </HamburgerIcon>
            </div>
            <Sidebar active={mobile} items={NavArray} closer={setMobile}/>
        </HeaderCore>
    )
}


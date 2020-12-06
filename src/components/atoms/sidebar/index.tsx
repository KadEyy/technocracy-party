import React, {FC} from 'react';
import styled from 'styled-components';
import NavItems from '../../../types/navItems';
import {StyledExternal, NavItem} from '../../elements';

interface SidebarProps{
    active: boolean;
    items: NavItems[];
    closer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarCoreProps{
    active: boolean;
}

const SidebarCore = styled.nav<SidebarCoreProps>`
    position: fixed;
    width: 350px;
    height: 100%;
    top: 0;
    transition: .75s;
    right: ${props => props.active ? '0' : '-355px'};
    background: rgba(255, 255, 255, 0.7);
    & > div{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        & > a{
            margin: 10px 0;
        }
    }
`;

const CloseButtonContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
`;

const CloseButton = styled.div`
    cursor: pointer;
    width: 28px;
    height: 30px;
    position: relative;
    &:before, &:after {
        content: '';
        height: 30px;
        border-left: 3px solid var(--primaryFont);
        position: absolute;
        left: 12px;
        top: -1px;
    }
    &:before {
        transform: rotate(-45deg);
    }
    &:after {
        transform: rotate(45deg);
    }
`;

export const Sidebar: FC<SidebarProps> = ({active, items, closer}) => {

    const navigation = items.map((item, i) => {
        return item.external ? <StyledExternal onClick={() => closer(false)} key={i} href={item.path}>{item.name}</StyledExternal> : <NavItem onClick={() => closer(false)} key={i} to={item.path} exact={item.path === '/'}>{item.name}</NavItem>;
    })

    return(
        <SidebarCore active={active}>
            <div>
                <CloseButtonContainer>
                    <CloseButton onClick={() => closer(false)}/>
                </CloseButtonContainer>
                {navigation}
            </div>
        </SidebarCore>
    )
}
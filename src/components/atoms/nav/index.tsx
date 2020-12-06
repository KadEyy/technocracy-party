import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {StyledExternal, NavItem} from '../../elements';
import NavItems from '../../../types/navItems';

interface Nav{
    items: NavItems[];
}

const NavCore = styled.nav`
    display: flex;
    flex-direction: row;
    font-weight: 700;
    font-size: 1.3em;
    @media(max-width: 999px){
        display: none;
    }
`;

export const Nav: FC<Nav> = ({items}) => {

    const navigation = items.map((item, i) => {
        return item.external ? <StyledExternal target="_blank" key={i} href={item.path}>{item.name}</StyledExternal> : <NavItem key={i} to={item.path} exact={item.path === '/'}>{item.name}</NavItem>;
    })

    return(
        <NavCore>
            {navigation}
        </NavCore>
    )
}
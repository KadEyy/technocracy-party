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
`;

export const Nav: FC<Nav> = ({items}) => {

    const navigation = items.map((item, i) => {
        return item.external ? <StyledExternal key={i} href={item.path}>{item.name}</StyledExternal> : <NavItem key={i} to={item.path} exact={item.path === '/'}>{item.name}</NavItem>;
    })

    return(
        <NavCore>
            {navigation}
        </NavCore>
    )
}
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavItem = styled(NavLink)`
    margin: 0 10px;
    text-decoration: none;
    color: var(--primaryFont);
    cursor: pointer;
    &.active {
        color: var(--third) !important;
    }
`;

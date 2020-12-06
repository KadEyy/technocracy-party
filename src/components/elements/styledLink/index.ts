import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--third);
    &:active, &:visited{
        color: var(--third);
    }
`;
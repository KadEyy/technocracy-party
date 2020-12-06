import styled from 'styled-components';

interface Cloud{
    secondary?: boolean;
}

export const Cloud = styled.div<Cloud>`
    display: flex;
    max-width: 560px;
    font-size: 1em;
    padding: 20px;
    border-radius: 10px;
    margin: 10px 0;
    ${props => props.secondary ? 'margin-left: auto;border: 2px solid var(--second); color: var(--primaryFont);' : 'background: var(--second); color: var(--secondaryFont)'}
`;
import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

interface SectionProps{
    width?: string;
    height?: string;
    background?: string;
}

export const Section = styled.div<SectionProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props => props.width ? `width: ${props.width};` : ''}
    ${props => props.height ? `min-height: ${props.height};` : ''}
    ${props => props.background ? `background: url("${props.background}");` : ''}
`;

export const SectionTitle = styled.h1`
    margin: 0 auto 10px;
    font-size: 3em;
    text-align: center;
`;
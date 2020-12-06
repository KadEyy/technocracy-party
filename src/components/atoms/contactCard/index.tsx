import React,{FC} from 'react';
import styled from 'styled-components';
import {ContactCore, StyledExternal} from '../../elements';
import Logo from '../../../../public/img/logo.png';

interface ContactCardProps{
    position: string;
    name: string;
    fburl: string;
}

const ContactCardCore = styled.div`
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 280px;
    height: 350px;
    border: 2px solid var(--second);
    border-radius: 10px;
    & > *{
        margin: 10px 0;
    }
`;

const LogoImg = styled.img`
    height: 100px;
`;

export const ContactCard: FC<ContactCardProps> = ({position, name, fburl}) => {
    return(
        <ContactCardCore>
            <LogoImg src={Logo}/>
            <ContactCore.PartyPosition>
                {position}:
            </ContactCore.PartyPosition>
            <ContactCore.PartyPerson>
                {name}
            </ContactCore.PartyPerson>
            <StyledExternal target="_blank" href={fburl} style={{fontSize: '0.7em', textAlign: 'center', maxWidth: '250px'}}>
                {fburl}
            </StyledExternal>
        </ContactCardCore>
    )
}
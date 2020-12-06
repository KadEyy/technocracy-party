import React,{FC} from 'react';
import styled from 'styled-components';
import {PagesCore} from '../../elements';
import {ContactCard} from '../../atoms';
import ContactArray from './ContactArray';

const ContactCoreBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1000px;
    flex-wrap: wrap;
    @media(max-width: 1000px){
        width: 100%;
    }
`;

const ContactPage: FC = () => {

    const renderCards = ContactArray.map((card, i) => <ContactCard key={i} fburl={card.fburl} name={card.name} position={card.position}/>)

    return(
        <PagesCore.Content>
            <PagesCore.Section style={{padding: '10px 0'}} width={'100%'} height={'calc(100vh - 89px)'}>
                <PagesCore.Section width={'100%'} height={'60px'}/>
                <PagesCore.SectionTitle>Kontakt</PagesCore.SectionTitle>
                <ContactCoreBox>
                    {renderCards}
                </ContactCoreBox>
            </PagesCore.Section>
        </PagesCore.Content>
    )
}

export default ContactPage;
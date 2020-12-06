import React, {FC} from 'react';
import {PagesCore} from '../../elements';
import styled from 'styled-components';
import {List} from '../../atoms';
import ListArray from './ListArray';

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    justify-content: space-around;
    @media(max-width: 1000px){
        width: calc(100% - 20px);
    }
    @media(max-width: 720px){
        flex-direction: column;
        align-items: center;
    }
`;

const ListText = styled.h2`
    font-size: 1.1em;
    text-align: right;
    padding: 0 10px;
    margin: 0 auto;
    width: calc(100% - 20px);
`;

const AboutText = styled.p`
    text-align: justify;
    max-width: 350px;
    font-size: 1em;
    margin: 16px 0;
`;

const About: FC = () => {
    return(
        <PagesCore.Content>
            <PagesCore.Section style={{padding: '10px 0'}} width={'calc(100% - 20px)'} height={'calc(100vh - 89px)'}>
                <PagesCore.Section width={'100%'} height={'60px'}/>
                <PagesCore.SectionTitle>O nas</PagesCore.SectionTitle>
                <FlexRow>
                    <AboutText>
                        Witaj! Skoro tu zajrzałeś/aś to może przeczytasz trochę o "partii" {'(XD)'}.
                        Stawiamy przede wszystkim na merytorykę, analizujemy statystyki i próbujemy wymyślać rozwiązania.
                        Oczywiście jeżeli temat na to pozwala to stawiamy na ekspertów i na ich rozwiązania, bo sami jesteśmy tylko grupą randomów z FB.
                        <br/><br/>
                        Możemy pochwalić się tym, że mamy bardzo dokładnie policzony budżet naszego programu {'(jego małą część widać po prawej stronie)'}, który w dodatku wychodzi lekko na plus.
                        <br/><br/>
                        Jeśli podoba Ci się klimat w którym możesz czegoś się nauczyć, dyskutować bez dogmatyzmów, to serdecznie zapraszamy!<br/><br/><span style={{fontSize: '0.7em'}}>{'(sorki jeżeli kogoś bolą oczy od mojego polskiego ale jestem 2Headem z tego języka.)'}</span>
                    </AboutText>
                    <PagesCore.Section width={'350px'} height={'auto'}>
                        <List items={ListArray} type={'decimal'} ordered={true}/>
                        <ListText>... a to tylko parę postulatów, przeczytaj pozostałe!</ListText>
                    </PagesCore.Section>
                </FlexRow>
            </PagesCore.Section>
        </PagesCore.Content>
    )
}

export default About;
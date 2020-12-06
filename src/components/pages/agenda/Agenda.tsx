import React, {FC} from 'react';
import {PagesCore} from '../../elements';
import PDF from '../../../../public/program.pdf';
import styled from 'styled-components';

const AgendaIframe = styled.iframe`
    width: 1000px;
    height: 75%;
    @media(max-width: 1020px){
        width: calc(100% - 20px);
        margin: 0 10px;
    }
`;

const AgendaPage: FC = () => {
    return(
        <PagesCore.Content>
            <PagesCore.Section style={{padding: '10px 0'}} width={'calc(100% - 20px)'} height={'calc(100vh - 89px)'}>
                <PagesCore.Section width={'100%'} height={'60px'}/>
                <PagesCore.SectionTitle>Program</PagesCore.SectionTitle>
                <AgendaIframe src={PDF + '#zoom=FitV'}/>
            </PagesCore.Section>
        </PagesCore.Content>
    )
}

export default AgendaPage;
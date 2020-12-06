import React, {FC} from 'react';
import {PagesCore} from '../../elements';
import {StartHero} from '../../reactions';
import styled, {keyframes} from 'styled-components';
import Background from '../../../../public/img/background.jpg'
import HeroArray from './heroArray';

const bounce = keyframes`
    0% {
        bottom: 40px;
    }
    25%{
        bottom: 45px;
    }
    50%{
        bottom: 40px;
    }
    75%{
        bottom: 35px;
    }
    100%{
        bottom: 40px;
    }
`;

const MoreButton = styled.a`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: solid var(--secondaryFont);
    border-width: 0 5px 5px 0;
    border-radius: 5px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    transform: rotate(45deg);
    animation: ${bounce} 1.25s linear infinite;
`;

const CenterText = styled.h1`
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--secondaryFont);
    font-size: 3em;
    text-shadow: 0 0 5px var(--primaryFont);
`;

const HomePage: FC = () =>{

    const scrollToStart = () => document.getElementById("start")?.scrollIntoView({behavior: 'smooth'});

    return(
            <PagesCore.Content>
                <PagesCore.Section background={Background} width={'100%'} height={'100vh'}>
                    <CenterText>Liczą się fakty.</CenterText>
                    <MoreButton onClick={() => scrollToStart()}/>
                </PagesCore.Section>
                <PagesCore.Section id="start" width={'100%'} height={'calc(100vh - 69px)'}>
                    <PagesCore.SectionTitle>Trochę o nas</PagesCore.SectionTitle>
                    <StartHero items={HeroArray}/>
                </PagesCore.Section>
            </PagesCore.Content>
    )
}

export default HomePage;
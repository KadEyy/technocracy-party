import React, {FC, useRef, useEffect} from 'react';
import styled from 'styled-components';

interface FrameProps{
    width?: string;
    height?: string;
    opacity?: string;
    background?: boolean;
    zIndex?: string;
}

const VideoFrame = styled.div<FrameProps>`
    width: ${props => props.width ? props.width : '100vw'};
    height: ${props => props.height ? props.height : '100vh'};
    opacity: ${props => props.opacity ? props.opacity  : '1'};
    ${props => props.background ? 'position: fixed;top:0;left:0;' : ''}
    ${props => props.zIndex ? `z-index: ${props.zIndex};` : ''}
    object-fit: cover;
`;

interface StyledVideoProps{
    background?: boolean;
}

const StyledVideo = styled.video<StyledVideoProps>`
    ${props => props.background ? 'position: fixed;top:0;left:0;object-fit: cover;' : ''}
    width: 100%;
    height: 100%;
`;

interface VideoPlayerProps{
    width?: string;
    height?: string;
    opacity?: string;
    autoplay?: boolean;
    controls?: boolean;
    background?: boolean;
    loop?: boolean;
    source: string;
    zIndex?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({width, height, opacity, zIndex, autoplay, controls, background, loop, source}) => {

    const video = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(video.current && autoplay){
            video.current.oncanplay = () => video.current ? video.current.play() : undefined;
        }
    }, [null])

    return(
        <VideoFrame zIndex={zIndex} width={width} height={height} opacity={opacity} background={background}>
            <StyledVideo background={background} ref={video} loop={loop} src={source} autoPlay={autoplay} controls={controls}>
            </StyledVideo>
        </VideoFrame>
    )
}
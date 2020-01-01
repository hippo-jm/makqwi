import styled from 'styled-components';
import React from "react";

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Icon = styled.div`
    color: #fff;    
`;


export const Header = () => {
    return (
        <Wrap>
            <Icon>
                <svg id="i-close"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="4">
                    <path d="M2 30 L30 2 M30 30 L2 2" />
                </svg>
            </Icon>
            <div>
                z
            </div>
        </Wrap>
    )
};

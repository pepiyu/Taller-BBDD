import React from 'react';
import styled from "styled-components";

interface KebabDotProps {
    title: string;
    function: void;
}

const KebabButton = () => {

    return (
        <KebabDotBox>

        </KebabDotBox>
    )

}

const KebabDotBox = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    column-gap: 6px;
`

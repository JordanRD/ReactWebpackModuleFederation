import React from "react";
import ReactLogo from "./logo512.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background: rgb(255, 255, 180);
    width: 100%;
    padding: 1rem;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .logo {
        width: 3rem;
        height: 3rem;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <img className="logo" src={ReactLogo} alt="react" />
            <h1>Header</h1>
        </HeaderContainer>
    );
}

export default Header;

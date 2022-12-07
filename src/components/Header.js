import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const HeaderContainer = styled.div`
margin-bottom: 10vh;
& img {
    margin-top: 1rem;
    margin-left: 1rem;
    height: 70px;
}

`

const Header = () => {
    return (
        <HeaderContainer>
                <Link to="/">
                

                <img src="https://uspto.report/TM/88004689/mark" alt= "logo"/>
                  
                  </Link>

        </HeaderContainer>
    )
}

export default Header
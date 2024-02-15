import styled from "styled-components";
import { Link } from "react-router-dom";


const Header = () => {


    return (
        <TopHead>
        <h1>
            <Link to="/" > Radiant Music</Link>
        </h1>
        <p>🛒: 8 items in cart</p>
        <br/>
        </TopHead>
    )
}

export default Header;

const TopHead = styled.div`

    background-color: hsl(210, 50%, 20%);
    color: hsl(30, 100%, 80%);
    margin: 0px;

    a {
        color: hsl(30, 100%, 80%);
        text-decoration: none;
    }

    a:visited {
        color: hsl(30, 100%, 80%);
    }

    h1{
        margin: 0px;
        padding: 10px 0px 10px 0px;
    }

`
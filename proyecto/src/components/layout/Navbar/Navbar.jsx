import { Link } from "react-router-dom";
import "./Navbar.css"
import { CartWidget } from "../../common/productCard/CartWidget";
import { menuNavigation } from "../../../router/menuNavigation";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                <Nav.Link as={Link} to="/">PEPES BOTINES</Nav.Link>
                        {menuNavigation.map(({ path, text, id }) => (
                            <Nav.Link key={id} as={Link} to={path}>{text}</Nav.Link>
                        ))}
                    </Nav>
                    {/* <Nav>
                    </Nav> */}
                </Navbar.Collapse>
                    <CartWidget />
            </Navbar>
        </>
    )
}
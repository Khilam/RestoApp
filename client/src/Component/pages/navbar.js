import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
 import {Link} from 'react-router-dom'


const Navbarr = () => {
    return(
        <div>
<Navbar bg="primary" variant="dark">
<Container>
{/* <Link to="/">Back</Link> */}
<Navbar.Brand href="/">Mon Resto</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="/admin">Admin</Nav.Link>
 
  <Nav.Link href="#features">Commander</Nav.Link>
  <Nav.Link href="#pricing">Sing In</Nav.Link>
</Nav>
</Container>
</Navbar>
</div>
    )}

export default Navbarr
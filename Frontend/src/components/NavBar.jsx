import {Container, Nav, Navbar , Button} from "react-bootstrap"

export default function NavBar(){
    return(
        <>
          <Navbar expand="lg" sticky="top" bg="dark" data-bs-theme="dark" className="w-100">
        <Container fluid>
          <Navbar.Brand href="#home">Local Bazar</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/> {/* mobile hamburger menu*/}
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
          <div className="d-flex gap-2">
            <Button variant = "outline-light">Login</Button>
            <Button variant = "outline-light">Sign Up</Button>
          </div>
        </Container>
      </Navbar>
      
        </>
    )
}
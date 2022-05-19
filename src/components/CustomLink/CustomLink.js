import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      // <div>
        <Link
          style={{ color: match ? "red" : "" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      /* </div> */
    );
  }

export default CustomLink;


{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><CustomLink to={'/'} > Ema John </CustomLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/"><CustomLink to={'/'} > Home </CustomLink> </Nav.Link>
                            <Nav.Link as={Link} to="/shop"><CustomLink to={'/shop'} > Shop </CustomLink> </Nav.Link>
                            <Nav.Link as={Link} to="/order"><CustomLink to={'/order'} > order </CustomLink> </Nav.Link>
                            <Nav.Link as={Link} to="/inventory"><CustomLink to={'/inventory'} > inventory </CustomLink> </Nav.Link>              
                            <Nav.Link as={Link} to="/log-in"><CustomLink to={'/log-in'} > log-in </CustomLink> </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                            {
                            user ? <Nav.Link as={Link} to="/log-in"><CustomLink to={'/log-in'} > Login </CustomLink> </Nav.Link>
                                :<button className='border text-white p-2 ' type='button' onClick={handleSingOut}>logOut</button>
                               
                        }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
import React, { useState } from "react";
import { Navbar, Container, Modal, Form, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import SearchIcon from "../../assets/img/search-icon.png";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="header_section">
        <Navbar bg="light" expand="lg">
          <Container>
            <Link class="logo" to="/">
              <img src={logo} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link">Signup</Link>
                </li>
              </ul>

              <div class="search_icon">
                <ul>
                  <li>
                    <button onClick={handleShow} href="#">
                      <img src={SearchIcon} />
                    </button>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Enter search term" />
            </Form.Group>
            <div className="readmore_bt">
            <Button type="submit" className="bg-transparent text-danger">
              Search
              </Button>
              </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;

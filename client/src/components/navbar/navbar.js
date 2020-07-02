import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import AddNewBtn from "../addNewBtn/addNewBtn";
import { FaRegHandPeace, FaTasks } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import "./style.css";

export default function navbar(props) {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="md">
        <Navbar.Brand
          href="#home"
          onClick={() => props.handlePageChange("Home")}
        >
          Resource Center
          <div className="nav-item home">
            <AiOutlineHome />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#recent"
              onClick={() => props.handlePageChange("Recent")}
            >
              Recent
              <div className="nav-item recent">
                <GiBackwardTime />
              </div>
            </Nav.Link>
            <Nav.Link
              href="#favorite"
              onClick={() => props.handlePageChange("Favorites")}
            >
              Favorites
              <div className="nav-item heart">
                <FiHeart />
              </div>
            </Nav.Link>

            {/* add new resource button */}
            <AddNewBtn
              updateState={props.updateState}
              addNewResource={props.addNewResource}
            />
            {/* tasks button */}
            <Button
              className="mr-3"
              variant="outline-danger"
              onClick={() => props.showTaskBar()}
            >Tasks
              <div className="nav-item task">
                <FaTasks />
              </div>
            </Button>
            {/* logout button */}
            <Button
              className="float-right"
              variant="outline-dark"
              onClick={() => props.logout()}
            >
              Logout
              <div className="nav-item peace">
                <FaRegHandPeace />
              </div>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

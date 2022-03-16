import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Signup from "./components/Signup";
import "./App.css";
import { UserContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <UserContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

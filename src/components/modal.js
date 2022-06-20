import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import jsondata from "./data";

const Modal = ({ props, children, status, statusChange }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(users);

  const fetchData = () => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  const fetchData2 = () => {
    fetch("http://localhost:3000/users2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  const fetchData3 = () => {
    fetch("http://localhost:3000/users3")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
        fetchData()
  }, []);
 
  

  return (
    <Overlay>
      {users.length > 0 &&
          users.map((user) => (
      <Container>
        <Title>
          <h3>Registro Nuevo Usuario</h3>
        </Title>
        <CloseButton onClick={() => statusChange(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </CloseButton>
        
            <Container1 >
              <Image
                src="https://images.unsplash.com/photo-1655506207889-4f130f49797f?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjU1NTc1NzA2&amp;ixlib=rb-1.2.1&amp;h=400"
                alt="image"
              />
              <Text>INFORMACION</Text>
              <Text01>Identificacion</Text01>
              <Text02>IDENTIFICACION</Text02>
              <Text03>Status</Text03>
              <Text04>Nombres</Text04>
              <Text05>CONTACTO</Text05>
              <Text06>Telefono</Text06>
              <Text07>Direccion</Text07>
              <Text08>Ciudad</Text08>
              <Text09>Apellidos</Text09>
              <Textinput onChange={setUserId} type="text" placeholder="identificacion" />
              <ButtonSearch>
                <TextButton>
                  <span>Buscar</span>
                </TextButton>
              </ButtonSearch>
              <Text11>{user.status}</Text11>
              <Text12>{user.names}</Text12>
              <Text13>{user.last_name}</Text13>
              <Text14>{user.tel}</Text14>
              <Text15>{user.adress}</Text15>
              <Text16>{user.city}</Text16>
            </Container1>
          
        <Container2>
          <Tabs defaultActiveKey="personal" className="user-tabs">
            <Tab eventKey="personal" title="Personal">
              <h4>{user.personal_data}</h4>              
            </Tab>
            <Tab eventKey="laboral" title="Laboral">
              <h4>{user.work_data}</h4>
            </Tab>
            <Tab eventKey="profesional" title="Profesional">
              <h4>{user.study_data}</h4>
            </Tab>
            <Tab eventKey="familiar" title="Familiar">
              <h4>{user.family_data}</h4>
            </Tab>
          </Tabs>
        </Container2>
      </Container>
      ))}
    </Overlay>
  );
};

export default Modal;

const ButtonSearch = styled("button")({
  top: "131px",
  left: "500px",
  position: "absolute",
});

const TextButton = styled("span")({});

const Overlay = styled("div")({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  background: "rgba(0,0,0,.5)",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
});

const Textinput = styled("input")({
  top: "131px",
  left: "300px",
  position: "absolute",
});

const Title = styled("div")({
  display: "flex",
  "align-items": "center",
  "justify-content": "space-between",
  "margin-bottom": "20px",
  "padding-bottom": "20px",
  "border-bottom": "1px solid #E8E8E8",
});

const CloseButton = styled("button")({
  position: "absolute",
  top: "20px",
  right: "20px",
  width: "25px",
  "font-size": "30",
  height: "25px",
  border: "none",
  background: "none",
  cursor: "pointer",
  transition: ".3s ease all",
  "boder-radius": "5px",
  "&": "hover",
});

const Container = styled("div")({
  width: "1300px",
  height: "700px",
  background: "#fff",
  position: "relative",
  "border-radius": "5px",
  "box-shadow": "rgba(100,100,111,.2) 0px 7px 29px 0px",
  padding: "20px",
  overflow: "auto",
  display: "flex",
  "flex-direction": "row",
  "justify-content": "center",
  "align-items": "flex-start",
});

const Container1 = styled("div")({
  display: "flex",
  "flex-direction": "column",
  width: "1064px",
  height: "490px",
  "align-items": "center",
  flex: "0 0 auto",
  top: "58px",
  position: "absolute",
  right: "0px",
  "border-width": "2px",
  "border-color": "#ad1b1b",
  margin: "auto",
  left: "0px",
  "border-style": "solid",
  "justify-content": "flex-start",
});

const Image = styled("img")({
  width: "253px",
  "object-fit": "cover",
  height: "393px",
  top: "63px",
  left: "37px",
  position: "absolute",
});

const Text = styled("h1")({
  top: "33px",
  left: "292px",
  position: "absolute",
});

const Text01 = styled("span")({
  top: "93px",
  left: "300px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
});

const Text02 = styled("h1")({
  top: "163px",
  left: "293px",
  position: "absolute",
});

const Text03 = styled("span")({
  top: "93px",
  left: "791px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
});

const Text04 = styled("span")({
  top: "219px",
  left: "300px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
});

const Text05 = styled("h1")({
  left: "293px",
  position: "absolute",
  top: "303px",
});

const Text06 = styled("span")({
  left: "304px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
  top: "364px",
});

const Text07 = styled("span")({
  top: "365px",
  left: "548px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
});

const Text08 = styled("span")({
  top: "364px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
  left: "786px",
});

const Text09 = styled("span")({
  top: "221px",
  position: "absolute",
  "font-weight": "600",
  "font-style": "normal",
  "font-size": "20px",
  left: "777px",
});

const Text10 = styled("label")({
  top: "131px",
  left: "301px",
  position: "absolute",
});

const Text11 = styled("label")({
  top: "130px",
  left: "803px",
  position: "absolute",
});

const Text12 = styled("label")({
  top: "260px",
  left: "299px",
  position: "absolute",
});

const Text13 = styled("label")({
  top: "260px",
  position: "absolute",
  margin: "auto",
  left: "773px",
});

const Text14 = styled("label")({
  top: "407px",
  left: "302px",
  position: "absolute",
});

const Text15 = styled("label")({
  left: "529px",
  position: "absolute",
  bottom: "53px",
});

const Text16 = styled("label")({
  top: "407px",
  left: "792px",
  position: "absolute",
});

const Container2 = styled("div")({
  display: "flex",
  "flex-direction": "column",
  width: "1065px",
  height: "239px",
  "align-items": "flex-start",
  "border-width": "2px",
  "border-style": "solid",
  "border-color": "#ad1b1b",
  left: "0px",
  position: "absolute",
  margin: "auto",
  top: "564px",
  right: "0px",
});

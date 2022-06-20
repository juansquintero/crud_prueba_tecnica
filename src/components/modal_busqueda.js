import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

import { projectStyleVariants } from ".style";

const Modal = (props) => {
  return (
    <Container>
      <Container1>
        <Text>Busqueda de Usuario</Text>
        <Text1>ID del usuario</Text1>
        <Textinput type="text" placeholder="placeholder" projVariant="input" />
        <Button projVariant="button">
          <Text2>
            <span>Buscar</span>
            <Text4></Text4>
          </Text2>
        </Button>
      </Container1>
    </Container>
  );
};

export default Modal;

const Container = styled("div")({
  width: "100%",
  "min-height": "100vh",
  overflow: "auto",
  display: "flex",
  "flex-direction": "row",
  "justify-content": "center",
  "align-items": "flex-start",
});

const Container1 = styled("div")({
  display: "flex",
  width: "750px",
  flex: "0 0 auto",
  "align-self": "stretch",
  height: "324px",
  left: "230px",
  position: "absolute",
  top: "105px",
  "border-width": "2px",
  "border-color": "#bf1f1f",
  "align-items": "center",
  "justify-content": "flex-start",
});

const Text = styled("h1")({
  top: "50px",
  left: "65px",
  position: "absolute",
});

const Text1 = styled("span")({
  top: "114px",
  left: "68px",
  position: "absolute",
  "font-weight": "700",
  "font-style": "normal",
  "font-size": "22px",
});

const Textinput = styled("input")(projectStyleVariants, {
  top: "154px",
  left: "65px",
  position: "absolute",
});

const Button = styled("button")(projectStyleVariants, {
  top: "229px",
  left: "65px",
  position: "absolute",
  width: "624px",
  height: "44px",
  display: "flex",
  "flex-direction": "row",
});

const Text2 = styled("span")({
  "text-align": "center",
  "text-transform": "uppercase",
  "font-weight": "900",
  "font-style": "normal",
  "font-size": "30px",
  left: "243px",
  position: "absolute",
  bottom: "1px",
});

const Text4 = styled("span")({
  "text-align": "center",
});

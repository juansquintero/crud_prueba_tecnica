import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";
import Modal from "./components/modal";
import ModalEdit from "./components/modal_edit";
import ModalNew from "./components/modal_new";
import ModalRemove from "./components/modal_remove";

const App = () => {
  const [modalStatus, getModalStatus] = useState(false);
  const [modalNewUser, getModalNewUser] = useState(false);
  const [modalEditUser, getModalEditNewUser] = useState(false);
  const [modalRemoveUser, getModalRemoveUser] = useState(false);

  return (
    <div>
      <ContenedorBotones>
        <Boton onClick={() => getModalStatus(!modalStatus)}>Ver Usuario</Boton>
        <Boton onClick={() => getModalNewUser(!modalNewUser)}>
          Crear Usuario
        </Boton>
        <Boton onClick={() => getModalEditNewUser(!modalEditUser)}>
          Editar Usuario
        </Boton>
        <Boton onClick={() => getModalRemoveUser(!modalRemoveUser)}>
          Eliminar Usuario
        </Boton>
      </ContenedorBotones>
      <Modal status={modalStatus} statusChange={getModalStatus}>
      </Modal>
      <ModalNew status={modalNewUser} statusChange={getModalNewUser}></ModalNew>
      <ModalEdit
        status={modalEditUser}
        statusChange={getModalEditNewUser}
      ></ModalEdit>
      <ModalRemove
        status={modalRemoveUser}
        statusChange={getModalRemoveUser}
      ></ModalRemove>
    </div>
  );
};

export default App;

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;

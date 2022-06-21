import React, { useEffect, useState } from "react";
import "./index.css";
import styled from "styled-components";
import Modal from "./components/modal";
import ModalEdit from "./components/modal_edit";


const App = () => {
  const [modalStatus, getModalStatus] = useState(false);  
  const [modalEditUser, getModalEditNewUser] = useState(false);  
  const [userId, setUderId] = useState();
  const [userData, setUserData] = useState([]);

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const modalID = (id) => {
    getModalStatus(!modalStatus);
    console.log(id)
    setUderId(id);

  }
  return (
    <>
      <div>
        <ContenedorBotones>
          <Boton onClick={() => getModalEditNewUser(!modalEditUser) }>
            Crear Usuario
          </Boton>
          <Tabla>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>BOTON</th>
              <th>BOTON</th>
              <th>BOTON</th>
            </tr>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.names}</td>
                <td>{user.last_name}</td>
                <td>
                  <Boton onClick={() => modalID(user.id)}>
                    Ver Usuario
                  </Boton>
                </td>
                <td>
                  <Boton onClick={() => getModalEditNewUser(!modalEditUser)}>
                    Editar Usuario
                  </Boton>
                </td>
                <td>
                  <Boton onClick={() => onDelete(user.id)}>
                    Eliminar Usuario
                  </Boton>
                </td>
              </tr>
            ))}
          </Tabla>
        </ContenedorBotones>

        <Modal status={modalStatus} statusChange={getModalStatus} user_id={userId}></Modal>        

        <ModalEdit
          status={modalEditUser}
          statusChange={getModalEditNewUser}
        ></ModalEdit>        
      </div>
    </>
  );
};

export default App;

const Tabla = styled.tbody`
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

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

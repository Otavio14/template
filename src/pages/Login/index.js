import React, { useState, useEffect } from "react";
import {
  Background,
  Container,
  Title,
  Input,
  Button,
  Form,
  Menu,
  Login,
  Register,
} from "./style";

export default function Index() {
  const [login, setLogin] = useState(true);

  return (
    <Background>
      <Container>
        <Menu>
          <Login
            login={login}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </Login>
          <Register
            login={login}
            onClick={() => {
              setLogin(false);
            }}
          >
            Cadastro
          </Register>
        </Menu>
        <Form>
          {login ? (
            <>
              <Title>Login</Title>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
              <Button>Entrar</Button>
            </>
          ) : (
            <>
              <Title>Cadastro</Title>
              <Input type="name" placeholder="Nome" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirmar Senha" />
              <Button>Cadastrar</Button>
            </>
          )}
        </Form>
      </Container>
    </Background>
  );
}

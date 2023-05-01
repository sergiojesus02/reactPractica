//Estilos de los componentes
import styled from "styled-components";
import { Colors } from "../Colors";
import "../styles/Fonts.css";

export const ButtonLog = styled.button`
  font-size: 1em;
  margin: 1em;
  border-radius: 5px;
  background-color: ${Colors.PURPLE};
  width: 80%;
  height: 30px;
  color: ${Colors.WITHE};
  font-family: Roboto;
  font-size: 16px;
`;

//container Login/register

export const ContainerLogin = styled.div`
  width: 50%;
  flex-direction: column;
  align-items: center;
  float: right;
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: ${Colors.WITHE};
`;

export const ContainerForm = styled.div`
  width: 70%;
  height: 62%;
  background-color: ${Colors.WITHE};
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 22px;
  margin: 20px;
  display: flex;
`;

export const InputText = styled.input`
  width: 90%;
  border-radius: 5px;
  height: 5%;
  border-color: ${Colors.GREY};
`;

export const Title = styled.p`
  font-family: Roboto;
  font-size: 28px;
  color: ${Colors.BLACK};
`

export const SubTitle = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${Colors.GREY};
`

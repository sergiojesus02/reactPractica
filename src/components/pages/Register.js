import React from "react";
import { ButtonLog, ContainerForm, ContainerLogin, InputText, SingIn, SubTitle, Title } from "../assets/styles/Styles";

const Register = () => {
  return (
    <ContainerLogin>
      <ContainerForm>
        <Title>Register</Title>
        <SubTitle>Full Name</SubTitle>
        <InputText/>
        <SubTitle>Email</SubTitle>
        <InputText/>
        <SubTitle>Phone Number</SubTitle>
        <InputText/>
        <SubTitle>Password</SubTitle>
        <InputText/>
        <ButtonLog>Sing up</ButtonLog>
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Register;

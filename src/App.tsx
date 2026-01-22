import { Button } from "./components/button";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export const App = () => {
  return (
    <>
      <Heading>
        Olá Mundo !!!
        <Button />
      </Heading>
      <p> Iniciando o projeto do pomodoro com o nome de Khronion. </p>
    </>
  );
};

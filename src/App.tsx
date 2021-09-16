import "./styles.css";
import styled from "styled-components";
import Orders from "./components/Orders";
import { useEffect } from "react";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  useEffect(() => {
    document.body.classList.add("body-bg");
  }, []);

  return (
    <StyledApp className="App">
      <Orders />
    </StyledApp>
  );
}

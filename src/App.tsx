import './styles.css';
import styled from 'styled-components';
import Orders from './components/Orders';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
   
  background: #111;
  
  display: flex;
  justify-content: center;
  
`;

export default function App() {
  return (
    <StyledApp className="App">
      <Orders />
    </StyledApp>
  );
}

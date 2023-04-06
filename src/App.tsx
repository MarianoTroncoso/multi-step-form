import './App.css';
import { GlobalStyle } from './GlobalStyle';
import FormStep from './components/FomStep/FomStep';
import StepList from './components/StepList';

function App() {
  return (
    <>
      <GlobalStyle />
      <StepList />
      <FormStep />
    </>
  );
}

export default App;

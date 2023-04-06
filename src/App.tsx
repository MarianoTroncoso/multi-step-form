import { GlobalStyle } from './GlobalStyle';
import FormStep from './components/FomStep/FomStep';
import StepList from './components/StepList';
import * as SC from './App.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <SC.Wrapper>
        <StepList />
        <FormStep />
      </SC.Wrapper>
    </>
  );
}

export default App;

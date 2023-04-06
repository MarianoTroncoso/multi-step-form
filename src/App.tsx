import { GlobalStyle } from './GlobalStyle';
import FormStep from './components/FomStep/FomStep';
import StepList from './components/StepList';
import * as SC from './App.styles';

const TEMP_FORM_STEP_INFO = {
  title: 'Step 1',
  description: 'This is the first step',
};

function App() {
  return (
    <>
      <GlobalStyle />
      <SC.Wrapper>
        <StepList />
        <FormStep
          title={TEMP_FORM_STEP_INFO.title}
          description={TEMP_FORM_STEP_INFO.description}
        >
          some form
        </FormStep>
      </SC.Wrapper>
    </>
  );
}

export default App;

import { GlobalStyle } from './GlobalStyle';
import FormStep from './components/FomStep/FomStep';
import StepList from './components/StepList';
import * as SC from './App.styles';
import { useState } from 'react';
import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from './constants';

const steps = {
  [FIRST_STEP]: {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.',
    component: <div>Primer Paso</div>,
  },
  [SECOND_STEP]: {
    title: 'Select Plan',
    description: 'You have the option of monthly or yearly billing.',
    component: <div>Segundo Paso</div>,
  },
  [THIRD_STEP]: {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    component: <div>Tercer Paso</div>,
  },
  [FOURTH_STEP]: {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    component: <div>Cuarto Paso</div>,
  },
};

function App() {
  const [currentStep, setCurrentStep] = useState<keyof typeof steps>(1);

  const handleNextStep = () => {
    setCurrentStep((currentStep + 1) as keyof typeof steps);
  };

  const handlePreviousStep = () => {
    setCurrentStep((currentStep - 1) as keyof typeof steps);
  };

  return (
    <>
      <GlobalStyle />
      <SC.Wrapper>
        <StepList currentStep={currentStep} />
        <FormStep
          title={steps[currentStep].title}
          description={steps[currentStep].description}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          step={currentStep}
        >
          {steps[currentStep].component}
        </FormStep>
      </SC.Wrapper>
    </>
  );
}

export default App;

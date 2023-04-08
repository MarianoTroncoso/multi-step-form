import { GlobalStyle } from './GlobalStyle';
import FormStep from './components/FomStep/FomStep';
import StepList from './components/StepList';
import * as SC from './App.styles';
import { useEffect, useState } from 'react';
import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from './constants';
import { Step } from './types';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import { FormikProvider } from 'formik';
import useMyForm from './useMyForm';

const steps = {
  [FIRST_STEP]: {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.',
    component: <PersonalInfo />,
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
  const navigate = useNavigate();

  const location = useLocation();

  const currentStepFromUrl = Number(location.pathname.replace('/', '')) as Step;

  const { form } = useMyForm();

  const [currentStep, setCurrentStep] = useState<Step>(
    currentStepFromUrl || FIRST_STEP
  );

  const handleNextStep = () => {
    const nextStep = (currentStep + 1) as Step;

    setCurrentStep(nextStep);
    navigate(`/${nextStep}`);
  };

  const handlePreviousStep = () => {
    const prevStep = (currentStep - 1) as Step;

    setCurrentStep(prevStep);
    navigate(`/${prevStep}`);
  };

  useEffect(() => {
    if (!currentStepFromUrl) {
      navigate(`/${FIRST_STEP}`);
    }
  }, [currentStepFromUrl, navigate]);

  const handleStepChange = (step: Step) => {
    setCurrentStep(step);
    navigate(`/${step}`);
  };

  return (
    <>
      <GlobalStyle />
      <FormikProvider value={form}>
        <SC.Layout>
          <SC.Container>
            <StepList
              currentStep={currentStep}
              onStepChange={handleStepChange}
            />
            <Routes>
              {Object.keys(steps).map((step) => {
                const stepNumber = Number(step) as Step;

                return (
                  <Route
                    key={stepNumber}
                    path={`/${stepNumber}`}
                    element={
                      <FormStep
                        title={steps[currentStep].title}
                        description={steps[currentStep].description}
                        onNext={handleNextStep}
                        onPrevious={handlePreviousStep}
                        step={currentStep}
                      >
                        {steps[currentStep].component}
                      </FormStep>
                    }
                  />
                );
              })}
            </Routes>
          </SC.Container>
        </SC.Layout>
      </FormikProvider>
    </>
  );
}

export default App;

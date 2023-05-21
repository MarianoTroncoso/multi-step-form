import FormStep from './components/FomStep/FomStep';
import StepList from './components/StepList';
import * as SC from './App.styles';
import { useEffect, useState } from 'react';
import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from './constants';
import { Step } from './types';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import { FormikProvider } from 'formik';
import useMyForm from './useMyForm';
import SelectPlan from './components/SelectPlan';
import useGetStepFromUrl from './useGetStepFromUrl';
import useFormContext from './context/formContext/useFormContext';

const steps = {
  [FIRST_STEP]: {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.',
    component: <PersonalInfo />,
  },
  [SECOND_STEP]: {
    title: 'Select Plan',
    description: 'You have the option of monthly or yearly billing.',
    component: <SelectPlan />,
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

  const { lastValidStep, setLastValidStep } = useFormContext();

  // const [lastValidStep, setLastValidStep] = useState<Step>(FIRST_STEP);

  const currentStepFromUrl = useGetStepFromUrl({ lastValidStep });

  const [currentStep, setCurrentStep] = useState<Step>(
    currentStepFromUrl || FIRST_STEP
  );

  const { form, isProgressValid } = useMyForm();

  const isNextStepValid = async (step: Step) => {
    if (step === currentStep) return true;

    const isGreaterStep = step > currentStep;

    if (isGreaterStep && !(await isProgressValid())) return false;

    return true;
  };

  useEffect(() => {
    // if the users wants to advance by url to an invalid step, we redirect him to the last valid step
    if (currentStepFromUrl > lastValidStep) {
      setCurrentStep(lastValidStep);
      navigate(`/${lastValidStep}`);
      return;
    }

    // TODO: if the user wants to advance by url to a valid step, we redirect him to that step (add after connect with LS)

    navigate(`/${currentStep}`);
  }, [currentStep, currentStepFromUrl, lastValidStep, navigate]);

  const handleStepChange = async (step: Step) => {
    if (await isNextStepValid(step)) {
      if (step > lastValidStep) {
        setLastValidStep(step);
      }

      setCurrentStep(step);
      navigate(`/${step}`);
    }
  };

  return (
    <FormikProvider value={form}>
      <SC.Layout>
        <SC.Container>
          <StepList currentStep={currentStep} onStepChange={handleStepChange} />
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
                      onNext={() => handleStepChange((currentStep + 1) as Step)}
                      onPrevious={() =>
                        handleStepChange((currentStep - 1) as Step)
                      }
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
  );
}

export default App;

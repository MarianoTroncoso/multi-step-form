import { useLocation } from 'react-router-dom';
import { Step } from '../types';
import { FIRST_STEP, FOURTH_STEP } from '../constants';

type Props = {
  lastValidStep: Step;
};

const useGetStepFromUrl = ({ lastValidStep }: Props): Step => {
  const location = useLocation();

  const currentStepFromUrl = Number(location.pathname.replace('/', '')) as Step;

  if (currentStepFromUrl < FIRST_STEP) {
    return FIRST_STEP;
  }

  if (currentStepFromUrl > FOURTH_STEP) {
    return lastValidStep;
  }

  return currentStepFromUrl;
};

export default useGetStepFromUrl;

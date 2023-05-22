import { FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } from '../constants';
import { FIELDS_BY_STEP } from '../enums';
import { FormValuesType, Step } from '../types';
import { validationSchema } from './useMyForm';

const steps: Step[] = [FIRST_STEP, SECOND_STEP, THIRD_STEP, FOURTH_STEP];

const useGetInvalidFields = () => {
  const getInvalidFields = async ({
    followingStep,
    formValues,
  }: {
    followingStep: Step;
    formValues: FormValuesType;
  }) => {
    const previousSteps: Step[] = steps.slice(
      0,
      steps.indexOf(followingStep)
    ) as Step[];

    const fieldsToValidate = previousSteps.reduce(
      (accumulator: string[], previousStep) => {
        return accumulator.concat(FIELDS_BY_STEP[previousStep]);
      },
      []
    );

    const promises = fieldsToValidate.map((field) => {
      return new Promise((resolve) => {
        validationSchema
          .validateAt(field, formValues)
          .then(() => {
            resolve(null);
          })
          .catch(() => {
            resolve(field);
          });
      });
    });

    const results = await Promise.all(promises);

    const invalidFields = results.filter((field) => field !== null);

    return invalidFields;
  };

  return { getInvalidFields };
};

export default useGetInvalidFields;

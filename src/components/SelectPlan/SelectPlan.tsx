import React, { useState } from 'react';
import * as SC from './SelectPlan.styles';
import Switch from '../Switch';
import { FormFieldsEnum, PlanBillingEnum, PlanTypeEnum } from '../../enums';
import { getPlanTypes } from './utils';
import { Field, FormikErrors, FormikValues } from 'formik';
import useFormContext from '../../context/formContext/useFormContext';

const SelectPlan: React.FC = () => {
  const { values: formContextValues, setValues } = useFormContext();

  const [selectedPlanBilling, setSelectedPlanBilling] =
    useState<PlanBillingEnum>(formContextValues.planBilling);

  const [selectedPlanType, setSelectedPlanType] = useState<PlanTypeEnum>(
    formContextValues.planType
  );

  const isYearlySelected = selectedPlanBilling === PlanBillingEnum.YEARLY;

  const planTypes = getPlanTypes({ isYearlySelected });

  return (
    <SC.Wrapper>
      <Field name={FormFieldsEnum.PLAN_TYPE}>
        {({
          form: { setFieldValue },
        }: {
          form: {
            setFieldValue: (
              field: string,
              value: any,
              shouldValidate?: boolean | undefined
            ) => Promise<FormikErrors<FormikValues>> | Promise<void>;
          };
        }) => {
          const handlePlanTypeClick = (planType: PlanTypeEnum) => {
            setSelectedPlanType(planType);
            setFieldValue(FormFieldsEnum.PLAN_TYPE, planType);
            setValues({
              ...formContextValues,
              [FormFieldsEnum.PLAN_TYPE]: planType,
            });
          };

          return (
            <SC.PlanTypes>
              {planTypes.map((planType) => {
                const { value, icon, title, price } = planType;

                const isSelected = selectedPlanType === value;

                return (
                  <SC.PlanType
                    key={value}
                    $isSelected={isSelected}
                    onClick={() => handlePlanTypeClick(value)}
                  >
                    <div>
                      <img src={icon} alt="arcade" height={40} />
                    </div>
                    <SC.Description>
                      <SC.Title>{title}</SC.Title>
                      <SC.Price>{[price]}</SC.Price>
                    </SC.Description>
                  </SC.PlanType>
                );
              })}
            </SC.PlanTypes>
          );
        }}
      </Field>

      <Field name={FormFieldsEnum.PLAN_BILLING}>
        {({
          form: { setFieldValue },
        }: {
          form: {
            setFieldValue: (
              field: string,
              value: any,
              shouldValidate?: boolean | undefined
            ) => Promise<FormikErrors<FormikValues>> | Promise<void>;
          };
        }) => {
          const handlePlanBillingClick = (planBilling: PlanBillingEnum) => {
            setSelectedPlanBilling(planBilling);
            setFieldValue(FormFieldsEnum.PLAN_BILLING, planBilling);
            setValues({
              ...formContextValues,
              [FormFieldsEnum.PLAN_BILLING]: planBilling,
            });
          };

          return (
            <SC.SwitchWrapper>
              <SC.BillingType
                $isSelected={!isYearlySelected}
                onClick={() => handlePlanBillingClick(PlanBillingEnum.MONTHLY)}
              >
                Monthly
              </SC.BillingType>
              <div>
                <Switch
                  isSwitched={isYearlySelected}
                  handleSwitch={() => {
                    handlePlanBillingClick(
                      isYearlySelected
                        ? PlanBillingEnum.MONTHLY
                        : PlanBillingEnum.YEARLY
                    );
                  }}
                />
              </div>
              <SC.BillingType
                $isSelected={isYearlySelected}
                onClick={() => handlePlanBillingClick(PlanBillingEnum.YEARLY)}
              >
                Yearly
              </SC.BillingType>
            </SC.SwitchWrapper>
          );
        }}
      </Field>
    </SC.Wrapper>
  );
};

export default SelectPlan;

import React, { useState } from 'react';
import * as SC from './SelectPlan.styles';
import Switch from '../Switch';
import { PlanBillingEnum, PlanTypeEnum } from '../../enums';
import { getPlanTypes } from './utils';
import { Field, FormikErrors, FormikValues } from 'formik';

const SelectPlan: React.FC = () => {
  const [selectedPlanBilling, setSelectedPlanBilling] =
    useState<PlanBillingEnum>(PlanBillingEnum.MONTHLY);

  const [selectedPlanType, setSelectedPlanType] = useState<PlanTypeEnum>(
    PlanTypeEnum.ARCADE
  );

  const isYearlySelected = selectedPlanBilling === PlanBillingEnum.YEARLY;

  const planTypes = getPlanTypes(isYearlySelected);

  return (
    <SC.Wrapper>
      <Field name="planType">
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
            setFieldValue('planType', planType);
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

      <Field name="planBilling">
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
            setFieldValue('planBilling', planBilling);
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

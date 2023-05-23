import React from 'react';
import * as SC from './Summary.styles';
import useFormContext from '../../context/formContext/useFormContext';
import { getFormattedAddOnPrice, getFormattedPrice } from '../../utils';

type Props = {};

const Summary: React.FC<Props> = () => {
  const { values: formContextValues } = useFormContext();

  const { addOns, planBilling, planType } = formContextValues;

  const planPrice = getFormattedPrice({
    planType,
    planBilling,
  });

  const getCapitalizedString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <SC.Table>
        <SC.Body>
          <SC.PlanSummary>
            <div>
              <SC.PlanSummaryTitle>
                {getCapitalizedString(planType)} (
                {getCapitalizedString(planBilling)})
              </SC.PlanSummaryTitle>
              <SC.PlanSummaryChange>Change</SC.PlanSummaryChange>
            </div>
            <SC.PlanSummaryPrice>{planPrice}</SC.PlanSummaryPrice>
          </SC.PlanSummary>
          <hr />
          <SC.AddOnsSummary>
            {addOns.map((addOn) => {
              const { title } = addOn;

              const addOnPrice = getFormattedAddOnPrice({
                addOnTitle: title,
                planBilling: formContextValues.planBilling,
              });

              return (
                <SC.AddOnItem key={title}>
                  <SC.AddOnName>{title}</SC.AddOnName>
                  <SC.AddOnPrice>{addOnPrice}</SC.AddOnPrice>
                </SC.AddOnItem>
              );
            })}
          </SC.AddOnsSummary>
        </SC.Body>
        <SC.Footer>
          <SC.FooterLabel>Total (per month)</SC.FooterLabel>
          <SC.FooterPrice>+$12/month</SC.FooterPrice>
        </SC.Footer>
      </SC.Table>
    </div>
  );
};

export default Summary;

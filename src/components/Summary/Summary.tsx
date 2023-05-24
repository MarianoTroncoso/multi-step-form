import React from 'react';
import * as SC from './Summary.styles';
import useFormContext from '../../context/formContext/useFormContext';
import {
  getFormattedAddOnPrice,
  getFormattedPrice,
  getPlanPrice,
  getTotalAddOnsPrice,
} from '../../utils';
import { PlanBillingEnum } from '../../enums';

const Summary: React.FC = () => {
  const { values: formContextValues } = useFormContext();

  const { addOns, planBilling, planType } = formContextValues;

  const formattedPlanPrice = getFormattedPrice({
    planType,
    planBilling,
  });

  const planPrice = getPlanPrice({
    planType,
    planBilling,
  });

  const addOnsPrice = getTotalAddOnsPrice({
    addOns,
    planBilling,
  });

  const total = planPrice + addOnsPrice;

  const formattedTotal = `+$${total}/${
    planBilling === PlanBillingEnum.MONTHLY ? 'month' : 'year'
  } `;

  const getCapitalizedString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <SC.Table>
      <SC.Body>
        <SC.PlanSummary>
          <div>
            <SC.PlanSummaryTitle>
              {getCapitalizedString(planType)} (
              {getCapitalizedString(planBilling)})
            </SC.PlanSummaryTitle>
          </div>
          <SC.PlanSummaryPrice>{formattedPlanPrice}</SC.PlanSummaryPrice>
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
        <SC.FooterLabel>
          Total (per{' '}
          {planBilling === PlanBillingEnum.MONTHLY ? 'month' : 'yeary'})
        </SC.FooterLabel>
        <SC.FooterPrice>{formattedTotal}</SC.FooterPrice>
      </SC.Footer>
    </SC.Table>
  );
};

export default Summary;

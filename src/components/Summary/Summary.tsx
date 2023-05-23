import React from 'react';
import * as SC from './Summary.styles';
import useFormContext from '../../context/formContext/useFormContext';

type Props = {};

const Summary: React.FC<Props> = () => {
  const { values: formContextValues } = useFormContext();

  const { addOns } = formContextValues;

  return (
    <div>
      <SC.Table>
        <SC.Body>
          <SC.PlanSummary>
            <div>
              <SC.PlanSummaryTitle>Arcade (Monthly)</SC.PlanSummaryTitle>
              <SC.PlanSummaryChange>Change</SC.PlanSummaryChange>
            </div>
            <SC.PlanSummaryPrice>$0.00</SC.PlanSummaryPrice>
          </SC.PlanSummary>
          <hr />
          <SC.AddOnsSummary>
            {addOns.map((addOn) => {
              const { title, price } = addOn;

              return (
                <SC.AddOnItem key={title}>
                  <SC.AddOnName>{title}</SC.AddOnName>
                  <SC.AddOnPrice>{price}</SC.AddOnPrice>
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

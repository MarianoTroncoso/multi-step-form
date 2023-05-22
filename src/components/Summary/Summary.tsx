import React from 'react';
import * as SC from './Summary.styles';

type Props = {};

const Summary: React.FC<Props> = () => {
  const addOns = [
    {
      name: 'Cloud Save',
      price: 2.99,
    },
    {
      name: 'Online Play',
      price: 3.99,
    },
  ];

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
              return (
                <SC.AddOnItem key={addOn.name}>
                  <SC.AddOnName>{addOn.name}</SC.AddOnName>
                  <SC.AddOnPrice>{addOn.price}</SC.AddOnPrice>
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

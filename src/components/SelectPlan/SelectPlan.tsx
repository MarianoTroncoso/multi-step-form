import React, { useState } from 'react';
import * as SC from './SelectPlan.styles';
import { IconArcade, IconAdvanced, IconPro } from '../../assets/images';
import Switch from '../Switch';

type Props = {};

const SelectPlan: React.FC<Props> = () => {
  const [isYearlySelected, setIsYearlySelected] = useState<boolean>(true);

  return (
    <SC.Wrapper>
      <SC.PlanTypes>
        <SC.PlanType>
          <div>
            <img src={IconArcade} alt="arcade" height={40} />
          </div>
          <SC.Description>
            <SC.Title>Arcade</SC.Title>
            <SC.Price>$9/mo</SC.Price>
          </SC.Description>
        </SC.PlanType>
        <SC.PlanType>
          <div>
            <img src={IconAdvanced} alt="advanced" height={40} />
          </div>
          <SC.Description>
            <SC.Title>Advanced</SC.Title>
            <SC.Price>$12/mo</SC.Price>
          </SC.Description>
        </SC.PlanType>
        <SC.PlanType>
          <div>
            <img src={IconPro} alt="pro" height={40} />
          </div>
          <SC.Description>
            <SC.Title>Pro</SC.Title>
            <SC.Price>$15/mo</SC.Price>
          </SC.Description>
        </SC.PlanType>
      </SC.PlanTypes>
      <SC.SwitchWrapper>
        <SC.BillingType
          $isSelected={!isYearlySelected}
          onClick={() => {
            setIsYearlySelected(false);
          }}
        >
          Monthly
        </SC.BillingType>
        <div>
          <Switch
            isSwitched={isYearlySelected}
            handleSwitch={() => setIsYearlySelected(!isYearlySelected)}
          />
        </div>
        <SC.BillingType
          $isSelected={isYearlySelected}
          onClick={() => {
            setIsYearlySelected(true);
          }}
        >
          Yearly
        </SC.BillingType>
      </SC.SwitchWrapper>
    </SC.Wrapper>
  );
};

export default SelectPlan;

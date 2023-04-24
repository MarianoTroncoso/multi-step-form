import React from 'react';
import * as SC from './SelectPlan.styles';
import { IconArcade, IconAdvanced, IconPro } from '../../assets/images';

type Props = {};

const SelectPlan: React.FC<Props> = () => {
  return (
    <SC.Wrapper>
      <SC.PlanTypes>
        <SC.PlanType>
          <div>
            <img src={IconArcade} alt="arcade" height={50} />
          </div>
          <div>Arcade</div>
          <div>$9/mo</div>
        </SC.PlanType>
        <SC.PlanType>
          <div>
            <img src={IconAdvanced} alt="advanced" height={50} />
          </div>
          <div>Advanced</div>
          <div>$12/mo</div>
        </SC.PlanType>
        <SC.PlanType>
          <div>
            <img src={IconPro} alt="pro" height={50} />
          </div>
          <div>Pro</div>
          <div>$15/mo</div>
        </SC.PlanType>
      </SC.PlanTypes>
    </SC.Wrapper>
  );
};

export default SelectPlan;

import React from 'react';
import * as SC from './PickAddOns.styles';

type AddOn = {
  title: string;
  description: string;
  price: string;
};

const addOns: AddOn[] = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: '+$1/mo',
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: '+$2/mo',
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: '+$2/mo',
  },
];

const PickAddOns: React.FC = () => {
  return (
    <SC.Wrapper>
      {addOns.map((addOn) => {
        const { title, description, price } = addOn;

        return (
          <SC.AddOn key={title}>
            <SC.Left>
              {/* <div>check</div> */}
              <div>
                <SC.Title>{title}</SC.Title>
                <SC.Description>{description}</SC.Description>
              </div>
            </SC.Left>
            <SC.Price>{price}</SC.Price>
          </SC.AddOn>
        );
      })}
    </SC.Wrapper>
  );
};

export default PickAddOns;

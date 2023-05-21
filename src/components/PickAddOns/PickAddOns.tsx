import React from 'react';
import * as SC from './PickAddOns.styles';
import useCheckboxList from '../../hooks/useCheckBoxList';

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
  const { isChecked, handleChange } = useCheckboxList({
    defaultChecked: [],
  });

  const handleClick = (title: string) => {
    handleChange(title);
  };

  return (
    <SC.Wrapper>
      {addOns.map((addOn) => {
        const { title, description, price } = addOn;

        const isAddOnChecked = isChecked(title);

        return (
          <SC.AddOn key={title} $isChecked={isAddOnChecked}>
            <SC.Left>
              <SC.CheckBoxWrapper>
                <input
                  type="checkbox"
                  checked={isAddOnChecked}
                  onChange={() => handleClick(title)}
                />
              </SC.CheckBoxWrapper>
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

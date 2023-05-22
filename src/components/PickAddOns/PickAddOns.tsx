import React from 'react';
import * as SC from './PickAddOns.styles';
import useCheckboxList from '../../hooks/useCheckBoxList';
import { AddOn } from '../../types';
import useFormContext from '../../context/formContext/useFormContext';
import { getAddOns } from './utils';
import { PlanBillingEnum } from '../../enums';

const PickAddOns: React.FC = () => {
  const { values: formContextValues, setValues } = useFormContext();

  const defaultChecked = formContextValues.addOns.map((addOn) => addOn.title);

  const { isChecked, handleChange } = useCheckboxList({
    defaultChecked,
  });

  const isYearlySelected =
    formContextValues.planBilling === PlanBillingEnum.YEARLY;

  const addOns = getAddOns({ isYearlySelected });

  const handleClick = (title: string) => {
    handleChange(title);

    const currentAddOn = addOns.find((addOn) => addOn.title === title) as AddOn;

    const isCurrentAddOnChecked =
      formContextValues.addOns.includes(currentAddOn);

    if (isCurrentAddOnChecked) {
      const newAddOns = formContextValues.addOns.filter(
        (addOn) => addOn.title !== title
      );
      setValues({
        ...formContextValues,
        addOns: newAddOns,
      });
    } else {
      setValues({
        ...formContextValues,
        addOns: [...formContextValues.addOns, currentAddOn],
      });
    }
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

import React from 'react';
import * as SC from './PickAddOns.styles';
import useCheckboxList from '../../hooks/useCheckBoxList';
import { AddOn } from '../../types';
import useFormContext from '../../context/formContext/useFormContext';
import { addOns } from '../../constants';
import { getFormattedAddOnPrice } from '../../utils';
import { Field, FormikErrors, FormikValues } from 'formik';
import { FormFieldsEnum } from '../../enums';

const PickAddOns: React.FC = () => {
  const { values: formContextValues, setValues } = useFormContext();

  const defaultChecked = formContextValues.addOns.map((addOn) => addOn.title);

  const { isChecked, handleChange } = useCheckboxList({
    defaultChecked,
  });

  return (
    <Field name={FormFieldsEnum.ADD_ONS}>
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
        const handleClick = (title: string) => {
          handleChange(title);

          const currentAddOn = addOns.find(
            (addOn) => addOn.title === title
          ) as AddOn;

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
            setFieldValue(FormFieldsEnum.ADD_ONS, newAddOns);
          } else {
            const newAddOns = [...formContextValues.addOns, currentAddOn];

            setValues({
              ...formContextValues,
              addOns: newAddOns,
            });

            setFieldValue(FormFieldsEnum.ADD_ONS, newAddOns);
          }
        };

        return (
          <SC.Wrapper>
            {addOns.map((addOn) => {
              const { title, description } = addOn;

              const isAddOnChecked = isChecked(title);

              const addOnPrice = getFormattedAddOnPrice({
                addOnTitle: title,
                planBilling: formContextValues.planBilling,
              });

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
                  <SC.Price>{addOnPrice}</SC.Price>
                </SC.AddOn>
              );
            })}
          </SC.Wrapper>
        );
      }}
    </Field>
  );
};

export default PickAddOns;

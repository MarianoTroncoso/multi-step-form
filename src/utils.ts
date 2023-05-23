import { addOns, planTypes } from './constants';
import { AddOnTitlesEnum, PlanBillingEnum, PlanTypeEnum } from './enums';
import { AddOn } from './types';

enum PlanBillingAbbreviationEnum {
  MONTHLY = 'mo',
  YEARLY = 'yr',
}

export const getPlanPrice = ({
  planType,
  planBilling,
}: {
  planType: PlanTypeEnum;
  planBilling: PlanBillingEnum;
}): number => {
  const planPrice = planTypes.find((plan) => plan.name === planType)?.price[
    planBilling
  ] as number;

  return planPrice;
};

export const getFormattedPrice = ({
  planType,
  planBilling,
}: {
  planType: PlanTypeEnum;
  planBilling: PlanBillingEnum;
}): string => {
  const planPrice = planTypes.find((plan) => plan.name === planType)?.price[
    planBilling
  ] as number;

  const formattedPlanPrice = `$${planPrice}/${
    planBilling === PlanBillingEnum.MONTHLY
      ? PlanBillingAbbreviationEnum.MONTHLY
      : PlanBillingAbbreviationEnum.YEARLY
  }`;

  return formattedPlanPrice;
};

export const getTotalAddOnsPrice = ({
  addOns,
  planBilling,
}: {
  addOns: AddOn[];
  planBilling: PlanBillingEnum;
}): number => {
  const totalAddOnsPrices = addOns.reduce(
    (total, addOn) => total + (addOn.price[planBilling] as number),
    0
  );

  return totalAddOnsPrices;
};

export const getFormattedAddOnPrice = ({
  addOnTitle,
  planBilling,
}: {
  addOnTitle: AddOnTitlesEnum;
  planBilling: PlanBillingEnum;
}): string => {
  const planPrice = addOns.find((addOn) => addOn.title === addOnTitle)?.price[
    planBilling
  ] as number;

  const formattedPlanPrice = `+$${planPrice}/${
    planBilling === PlanBillingEnum.MONTHLY
      ? PlanBillingAbbreviationEnum.MONTHLY
      : PlanBillingAbbreviationEnum.YEARLY
  }`;

  return formattedPlanPrice;
};

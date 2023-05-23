import { planTypes } from './constants';
import { PlanBillingEnum, PlanTypeEnum } from './enums';

enum PlanBillingAbbreviationEnum {
  MONTHLY = 'mo',
  YEARLY = 'yr',
}

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

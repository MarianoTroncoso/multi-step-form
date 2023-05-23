import { IconAdvanced, IconArcade, IconPro } from './assets/images';
import { PlanBillingEnum, PlanTypeEnum } from './enums';
import { Plan } from './types';

export const FIRST_STEP = 1;
export const SECOND_STEP = 2;
export const THIRD_STEP = 3;
export const FOURTH_STEP = 4;

export const planTypes: Plan[] = [
  {
    name: PlanTypeEnum.ARCADE,
    icon: IconArcade,
    price: {
      [PlanBillingEnum.MONTHLY]: 9,
      [PlanBillingEnum.YEARLY]: 90,
    },
  },
  {
    name: PlanTypeEnum.ADVANCED,
    icon: IconAdvanced,
    price: {
      [PlanBillingEnum.MONTHLY]: 12,
      [PlanBillingEnum.YEARLY]: 120,
    },
  },
  {
    name: PlanTypeEnum.PRO,
    icon: IconPro,
    price: {
      [PlanBillingEnum.MONTHLY]: 15,
      [PlanBillingEnum.YEARLY]: 150,
    },
  },
];

import { IconAdvanced, IconArcade, IconPro } from './assets/images';
import {
  AddOnTitlesEnum,
  FormFieldsEnum,
  PlanBillingEnum,
  PlanTypeEnum,
} from './enums';
import { AddOn, Plan } from './types';

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

export const addOns: AddOn[] = [
  {
    title: AddOnTitlesEnum.ONLINE_SERVICE,
    description: 'Access to multiplayer games',
    price: {
      [PlanBillingEnum.MONTHLY]: 1,
      [PlanBillingEnum.YEARLY]: 10,
    },
  },
  {
    title: AddOnTitlesEnum.LARGER_STORAGE,
    description: 'Extra 1TB of cloud save',
    price: {
      [PlanBillingEnum.MONTHLY]: 2,
      [PlanBillingEnum.YEARLY]: 20,
    },
  },
  {
    title: AddOnTitlesEnum.CUSTOMIZABLE_PROFILE,
    description: 'Custom theme on your profile',
    price: {
      [PlanBillingEnum.MONTHLY]: 2,
      [PlanBillingEnum.YEARLY]: 20,
    },
  },
];

export const FIELDS_BY_STEP = {
  [FIRST_STEP]: [
    FormFieldsEnum.NAME,
    FormFieldsEnum.EMAIL,
    FormFieldsEnum.PHONE,
  ],
  [SECOND_STEP]: [FormFieldsEnum.PLAN_TYPE, FormFieldsEnum.PLAN_BILLING],
  [THIRD_STEP]: [FormFieldsEnum.ADD_ONS],
  [FOURTH_STEP]: [],
};

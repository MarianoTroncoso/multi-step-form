import { IconArcade, IconAdvanced, IconPro } from '../../assets/images';
import { PlanTypeEnum } from '../../enums';

export const getPlanTypes = (isYearlySelected: boolean) => {
  return [
    {
      value: PlanTypeEnum.ARCADE,
      icon: IconArcade,
      title: 'Arcade',
      price: isYearlySelected ? '$90/yr' : '$9/mo',
    },
    {
      value: PlanTypeEnum.ADVANCED,
      icon: IconAdvanced,
      title: 'Advanced',
      price: isYearlySelected ? '$120/yr' : '$12/mo',
    },
    {
      value: PlanTypeEnum.PRO,
      icon: IconPro,
      title: 'Pro',
      price: isYearlySelected ? '$150/yr' : '$15/mo',
    },
  ];
};

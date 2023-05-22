import { AddOn } from '../../types';

export const getAddOns = ({
  isYearlySelected,
}: {
  isYearlySelected: boolean;
}): AddOn[] => {
  return [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: isYearlySelected ? '+$10/yr' : '+$1/mo',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: isYearlySelected ? '+$20/yr' : '+$2/mo',
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: isYearlySelected ? '+$20/yr' : '+$2/mo',
    },
  ];
};

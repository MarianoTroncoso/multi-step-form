import React from 'react';
import * as SC from './Switch.styles';

interface Props {
  isSwitched?: boolean;
  handleSwitch?: (value: boolean) => void;
}

const Switch: React.FC<Props> = ({ isSwitched = false, handleSwitch }) => {
  return (
    <SC.Container onClick={() => handleSwitch?.(!isSwitched)}>
      <SC.Dot status={isSwitched} />
      <SC.Background status={isSwitched} />
    </SC.Container>
  );
};
export default Switch;

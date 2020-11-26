// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleOutlined: PauseCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleOutlinedSvg}></AntdIcon>;
};

PauseCircleOutlined.displayName = 'PauseCircleOutlined';
PauseCircleOutlined.inheritAttrs = false;
export default PauseCircleOutlined;
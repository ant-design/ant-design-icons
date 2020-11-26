// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseOutlined: PauseOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseOutlinedSvg}></AntdIcon>;
};

PauseOutlined.displayName = 'PauseOutlined';
PauseOutlined.inheritAttrs = false;
export default PauseOutlined;
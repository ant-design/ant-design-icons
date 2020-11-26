// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PoundOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PoundOutlined: PoundOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoundOutlinedSvg}></AntdIcon>;
};

PoundOutlined.displayName = 'PoundOutlined';
PoundOutlined.inheritAttrs = false;
export default PoundOutlined;
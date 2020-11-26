// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PoundCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PoundCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PoundCircleOutlined: PoundCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoundCircleOutlinedSvg}></AntdIcon>;
};

PoundCircleOutlined.displayName = 'PoundCircleOutlined';
PoundCircleOutlined.inheritAttrs = false;
export default PoundCircleOutlined;
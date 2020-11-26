// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpCircleOutlined: UpCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpCircleOutlinedSvg}></AntdIcon>;
};

UpCircleOutlined.displayName = 'UpCircleOutlined';
UpCircleOutlined.inheritAttrs = false;
export default UpCircleOutlined;
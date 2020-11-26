// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownCircleOutlined: DownCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownCircleOutlinedSvg}></AntdIcon>;
};

DownCircleOutlined.displayName = 'DownCircleOutlined';
DownCircleOutlined.inheritAttrs = false;
export default DownCircleOutlined;
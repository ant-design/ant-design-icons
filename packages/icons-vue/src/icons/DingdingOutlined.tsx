// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DingdingOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DingdingOutlined: DingdingOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingdingOutlinedSvg}></AntdIcon>;
};

DingdingOutlined.displayName = 'DingdingOutlined';
DingdingOutlined.inheritAttrs = false;
export default DingdingOutlined;
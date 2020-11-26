// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DingtalkOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingtalkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DingtalkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DingtalkOutlined: DingtalkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingtalkOutlinedSvg}></AntdIcon>;
};

DingtalkOutlined.displayName = 'DingtalkOutlined';
DingtalkOutlined.inheritAttrs = false;
export default DingtalkOutlined;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TwitterOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TwitterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TwitterOutlined: TwitterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitterOutlinedSvg}></AntdIcon>;
};

TwitterOutlined.displayName = 'TwitterOutlined';
TwitterOutlined.inheritAttrs = false;
export default TwitterOutlined;
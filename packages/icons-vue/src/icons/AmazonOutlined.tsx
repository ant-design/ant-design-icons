// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AmazonOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AmazonOutlined: AmazonOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AmazonOutlinedSvg}></AntdIcon>;
};

AmazonOutlined.displayName = 'AmazonOutlined';
AmazonOutlined.inheritAttrs = false;
export default AmazonOutlined;
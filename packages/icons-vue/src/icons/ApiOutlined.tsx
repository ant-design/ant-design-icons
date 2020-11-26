// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ApiOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ApiOutlined: ApiOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ApiOutlinedSvg}></AntdIcon>;
};

ApiOutlined.displayName = 'ApiOutlined';
ApiOutlined.inheritAttrs = false;
export default ApiOutlined;
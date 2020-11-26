// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RestOutlinedSvg from '@ant-design/icons-svg/lib/asn/RestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RestOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RestOutlined: RestOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestOutlinedSvg}></AntdIcon>;
};

RestOutlined.displayName = 'RestOutlined';
RestOutlined.inheritAttrs = false;
export default RestOutlined;
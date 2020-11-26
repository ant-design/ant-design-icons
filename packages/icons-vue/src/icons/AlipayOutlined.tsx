// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlipayOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlipayOutlined: AlipayOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipayOutlinedSvg}></AntdIcon>;
};

AlipayOutlined.displayName = 'AlipayOutlined';
AlipayOutlined.inheritAttrs = false;
export default AlipayOutlined;
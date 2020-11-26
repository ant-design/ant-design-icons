// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlipayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlipayCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlipayCircleOutlined: AlipayCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipayCircleOutlinedSvg}></AntdIcon>;
};

AlipayCircleOutlined.displayName = 'AlipayCircleOutlined';
AlipayCircleOutlined.inheritAttrs = false;
export default AlipayCircleOutlined;
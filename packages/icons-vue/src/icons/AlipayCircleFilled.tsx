// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlipayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlipayCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlipayCircleFilled: AlipayCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipayCircleFilledSvg}></AntdIcon>;
};

AlipayCircleFilled.displayName = 'AlipayCircleFilled';
AlipayCircleFilled.inheritAttrs = false;
export default AlipayCircleFilled;
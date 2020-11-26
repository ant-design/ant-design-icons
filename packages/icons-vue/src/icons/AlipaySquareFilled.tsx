// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlipaySquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlipaySquareFilled: AlipaySquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipaySquareFilledSvg}></AntdIcon>;
};

AlipaySquareFilled.displayName = 'AlipaySquareFilled';
AlipaySquareFilled.inheritAttrs = false;
export default AlipaySquareFilled;
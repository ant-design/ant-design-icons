// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QqSquareFilledSvg from '@ant-design/icons-svg/lib/asn/QqSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QqSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QqSquareFilled: QqSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QqSquareFilledSvg}></AntdIcon>;
};

QqSquareFilled.displayName = 'QqSquareFilled';
QqSquareFilled.inheritAttrs = false;
export default QqSquareFilled;
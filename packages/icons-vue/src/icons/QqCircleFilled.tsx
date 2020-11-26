// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QqCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QqCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QqCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QqCircleFilled: QqCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QqCircleFilledSvg}></AntdIcon>;
};

QqCircleFilled.displayName = 'QqCircleFilled';
QqCircleFilled.inheritAttrs = false;
export default QqCircleFilled;
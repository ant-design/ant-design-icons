// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QqOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QqOutlined: QqOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QqOutlinedSvg}></AntdIcon>;
};

QqOutlined.displayName = 'QqOutlined';
QqOutlined.inheritAttrs = false;
export default QqOutlined;
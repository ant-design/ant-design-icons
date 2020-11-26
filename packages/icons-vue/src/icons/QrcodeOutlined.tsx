// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QrcodeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QrcodeOutlined: QrcodeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrcodeOutlinedSvg}></AntdIcon>;
};

QrcodeOutlined.displayName = 'QrcodeOutlined';
QrcodeOutlined.inheritAttrs = false;
export default QrcodeOutlined;
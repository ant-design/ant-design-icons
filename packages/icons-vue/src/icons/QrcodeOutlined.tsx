// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QrcodeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QrcodeOutlinedSvg}></AntdIcon>;
};

QrcodeOutlined.displayName = 'QrcodeOutlined';
QrcodeOutlined.inheritAttrs = false;
export default QrcodeOutlined;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpCircleOutlinedSvg}></AntdIcon>;
};

UpCircleOutlined.displayName = 'UpCircleOutlined';
UpCircleOutlined.inheritAttrs = false;
export default UpCircleOutlined;
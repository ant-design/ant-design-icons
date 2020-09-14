// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DingdingOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingdingOutlinedSvg}></AntdIcon>;
};

DingdingOutlined.displayName = 'DingdingOutlined';
DingdingOutlined.inheritAttrs = false;
export default DingdingOutlined;
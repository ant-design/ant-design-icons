// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MehOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MehOutlinedSvg}></AntdIcon>;
};

MehOutlined.displayName = 'MehOutlined';
MehOutlined.inheritAttrs = false;
export default MehOutlined;
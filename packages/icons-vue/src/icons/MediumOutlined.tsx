// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MediumOutlinedSvg}></AntdIcon>;
};

MediumOutlined.displayName = 'MediumOutlined';
MediumOutlined.inheritAttrs = false;
export default MediumOutlined;
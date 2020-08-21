// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiTwoToneSvg}></AntdIcon>;
};

CiTwoTone.displayName = 'CiTwoTone';
CiTwoTone.inheritAttrs = false;
export default CiTwoTone;
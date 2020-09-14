// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BellTwoToneSvg}></AntdIcon>;
};

BellTwoTone.displayName = 'BellTwoTone';
BellTwoTone.inheritAttrs = false;
export default BellTwoTone;
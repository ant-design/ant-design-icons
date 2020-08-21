// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayoutTwoToneSvg}></AntdIcon>;
};

LayoutTwoTone.displayName = 'LayoutTwoTone';
LayoutTwoTone.inheritAttrs = false;
export default LayoutTwoTone;
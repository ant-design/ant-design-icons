// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarTwoToneSvg}></AntdIcon>;
};

StarTwoTone.displayName = 'StarTwoTone';
StarTwoTone.inheritAttrs = false;
export default StarTwoTone;
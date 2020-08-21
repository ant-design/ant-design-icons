// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkypeFilledSvg}></AntdIcon>;
};

SkypeFilled.displayName = 'SkypeFilled';
SkypeFilled.inheritAttrs = false;
export default SkypeFilled;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarTwoToneSvg}></AntdIcon>;
};

CarTwoTone.displayName = 'CarTwoTone';
CarTwoTone.inheritAttrs = false;
export default CarTwoTone;
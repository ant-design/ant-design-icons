// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcardFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IdcardFilledSvg}></AntdIcon>;
};

IdcardFilled.displayName = 'IdcardFilled';
IdcardFilled.inheritAttrs = false;
export default IdcardFilled;
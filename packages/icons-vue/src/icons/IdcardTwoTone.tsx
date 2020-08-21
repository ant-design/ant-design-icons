// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcardTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IdcardTwoToneSvg}></AntdIcon>;
};

IdcardTwoTone.displayName = 'IdcardTwoTone';
IdcardTwoTone.inheritAttrs = false;
export default IdcardTwoTone;
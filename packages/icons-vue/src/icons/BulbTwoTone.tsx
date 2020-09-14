// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulbTwoToneSvg}></AntdIcon>;
};

BulbTwoTone.displayName = 'BulbTwoTone';
BulbTwoTone.inheritAttrs = false;
export default BulbTwoTone;
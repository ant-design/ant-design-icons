// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulbFilledSvg}></AntdIcon>;
};

BulbFilled.displayName = 'BulbFilled';
BulbFilled.inheritAttrs = false;
export default BulbFilled;
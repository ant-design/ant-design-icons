// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseFilledSvg}></AntdIcon>;
};

DatabaseFilled.displayName = 'DatabaseFilled';
DatabaseFilled.inheritAttrs = false;
export default DatabaseFilled;
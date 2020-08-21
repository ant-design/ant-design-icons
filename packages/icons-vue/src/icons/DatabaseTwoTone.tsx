// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseTwoToneSvg}></AntdIcon>;
};

DatabaseTwoTone.displayName = 'DatabaseTwoTone';
DatabaseTwoTone.inheritAttrs = false;
export default DatabaseTwoTone;
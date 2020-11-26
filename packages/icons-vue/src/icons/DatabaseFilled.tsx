// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DatabaseFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DatabaseFilled: DatabaseFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseFilledSvg}></AntdIcon>;
};

DatabaseFilled.displayName = 'DatabaseFilled';
DatabaseFilled.inheritAttrs = false;
export default DatabaseFilled;
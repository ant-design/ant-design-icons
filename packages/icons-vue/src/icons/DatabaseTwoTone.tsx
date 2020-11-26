// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DatabaseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DatabaseTwoTone: DatabaseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseTwoToneSvg}></AntdIcon>;
};

DatabaseTwoTone.displayName = 'DatabaseTwoTone';
DatabaseTwoTone.inheritAttrs = false;
export default DatabaseTwoTone;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiffTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiffTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiffTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiffTwoTone: DiffTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiffTwoToneSvg}></AntdIcon>;
};

DiffTwoTone.displayName = 'DiffTwoTone';
DiffTwoTone.inheritAttrs = false;
export default DiffTwoTone;
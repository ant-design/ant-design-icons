// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiffFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiffFilled: DiffFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiffFilledSvg}></AntdIcon>;
};

DiffFilled.displayName = 'DiffFilled';
DiffFilled.inheritAttrs = false;
export default DiffFilled;
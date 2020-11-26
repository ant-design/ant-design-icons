// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReadFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReadFilled: ReadFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReadFilledSvg}></AntdIcon>;
};

ReadFilled.displayName = 'ReadFilled';
ReadFilled.inheritAttrs = false;
export default ReadFilled;
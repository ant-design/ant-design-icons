// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveFilled: SaveFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveFilledSvg}></AntdIcon>;
};

SaveFilled.displayName = 'SaveFilled';
SaveFilled.inheritAttrs = false;
export default SaveFilled;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveTwoTone: SaveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveTwoToneSvg}></AntdIcon>;
};

SaveTwoTone.displayName = 'SaveTwoTone';
SaveTwoTone.inheritAttrs = false;
export default SaveTwoTone;
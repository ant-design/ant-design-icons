// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileTwoTone: FileTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTwoToneSvg}></AntdIcon>;
};

FileTwoTone.displayName = 'FileTwoTone';
FileTwoTone.inheritAttrs = false;
export default FileTwoTone;
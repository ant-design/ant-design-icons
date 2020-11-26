// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagsTwoTone: TagsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagsTwoToneSvg}></AntdIcon>;
};

TagsTwoTone.displayName = 'TagsTwoTone';
TagsTwoTone.inheritAttrs = false;
export default TagsTwoTone;
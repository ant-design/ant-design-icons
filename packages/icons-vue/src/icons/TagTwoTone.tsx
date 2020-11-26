// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagTwoTone: TagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagTwoToneSvg}></AntdIcon>;
};

TagTwoTone.displayName = 'TagTwoTone';
TagTwoTone.inheritAttrs = false;
export default TagTwoTone;
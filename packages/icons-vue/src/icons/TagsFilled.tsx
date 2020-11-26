// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagsFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagsFilled: TagsFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagsFilledSvg}></AntdIcon>;
};

TagsFilled.displayName = 'TagsFilled';
TagsFilled.inheritAttrs = false;
export default TagsFilled;
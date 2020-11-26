// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagsOutlined: TagsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagsOutlinedSvg}></AntdIcon>;
};

TagsOutlined.displayName = 'TagsOutlined';
TagsOutlined.inheritAttrs = false;
export default TagsOutlined;
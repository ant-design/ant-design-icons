// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagFilled: TagFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagFilledSvg}></AntdIcon>;
};

TagFilled.displayName = 'TagFilled';
TagFilled.inheritAttrs = false;
export default TagFilled;
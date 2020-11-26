// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TagOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TagOutlined: TagOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagOutlinedSvg}></AntdIcon>;
};

TagOutlined.displayName = 'TagOutlined';
TagOutlined.inheritAttrs = false;
export default TagOutlined;
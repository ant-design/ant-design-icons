// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagsOutlinedSvg}></AntdIcon>;
};

TagsOutlined.displayName = 'TagsOutlined';
TagsOutlined.inheritAttrs = false;
export default TagsOutlined;
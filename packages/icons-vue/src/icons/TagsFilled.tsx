// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagsFilledSvg}></AntdIcon>;
};

TagsFilled.displayName = 'TagsFilled';
TagsFilled.inheritAttrs = false;
export default TagsFilled;
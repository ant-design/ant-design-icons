// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagFilledSvg}></AntdIcon>;
};

TagFilled.displayName = 'TagFilled';
TagFilled.inheritAttrs = false;
export default TagFilled;
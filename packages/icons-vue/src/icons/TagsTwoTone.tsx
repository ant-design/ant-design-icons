// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagsTwoToneSvg}></AntdIcon>;
};

TagsTwoTone.displayName = 'TagsTwoTone';
TagsTwoTone.inheritAttrs = false;
export default TagsTwoTone;
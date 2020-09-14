// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagTwoToneSvg}></AntdIcon>;
};

TagTwoTone.displayName = 'TagTwoTone';
TagTwoTone.inheritAttrs = false;
export default TagTwoTone;
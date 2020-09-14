// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TagOutlinedSvg}></AntdIcon>;
};

TagOutlined.displayName = 'TagOutlined';
TagOutlined.inheritAttrs = false;
export default TagOutlined;
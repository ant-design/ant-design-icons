// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommentOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommentOutlinedSvg}></AntdIcon>;
};

CommentOutlined.displayName = 'CommentOutlined';
CommentOutlined.inheritAttrs = false;
export default CommentOutlined;
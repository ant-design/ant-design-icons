// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommentOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommentOutlined: CommentOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommentOutlinedSvg}></AntdIcon>;
};

CommentOutlined.displayName = 'CommentOutlined';
CommentOutlined.inheritAttrs = false;
export default CommentOutlined;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommentOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CommentOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CommentOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CommentOutlined';
}

export default RefIcon;
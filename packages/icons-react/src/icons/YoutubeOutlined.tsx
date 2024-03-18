// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YoutubeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(YoutubeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'YoutubeOutlined';
}

export default RefIcon;
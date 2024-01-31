// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DockerOutlinedSvg from '@ant-design/icons-svg/lib/asn/DockerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DockerOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DockerOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DockerOutlined.displayName = 'DockerOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DockerOutlined);
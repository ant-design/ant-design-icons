// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitlabOutlinedSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitlabOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GitlabOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GitlabOutlined';
}

export default RefIcon;
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GitlabFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GitlabFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GitlabFilled';
}

export default RefIcon;
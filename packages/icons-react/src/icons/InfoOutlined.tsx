// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InfoOutlined';
}

export default RefIcon;
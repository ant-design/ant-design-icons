// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FormOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FormOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FormOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FormOutlined';
}

export default RefIcon;
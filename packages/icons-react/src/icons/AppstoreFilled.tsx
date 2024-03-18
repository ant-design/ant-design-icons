// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppstoreFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppstoreFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AppstoreFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AppstoreFilled';
}

export default RefIcon;
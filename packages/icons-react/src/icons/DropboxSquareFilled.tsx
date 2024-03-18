// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DropboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropboxSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DropboxSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DropboxSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DropboxSquareFilled';
}

export default RefIcon;
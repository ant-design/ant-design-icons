// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExperimentFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExperimentFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ExperimentFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExperimentFilled';
}

export default RefIcon;
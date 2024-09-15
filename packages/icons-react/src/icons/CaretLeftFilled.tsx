// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretLeftFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretLeftFilledSvg} />;

 /**![caret-left](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY4OSAxNjUuMUwzMDguMiA0OTMuNWMtMTAuOSA5LjQtMTAuOSAyNy41IDAgMzdMNjg5IDg1OC45YzE0LjIgMTIuMiAzNSAxLjIgMzUtMTguNVYxODMuNmMwLTE5LjctMjAuOC0zMC43LTM1LTE4LjV6IiAvPjwvc3ZnPg==) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretLeftFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretLeftFilled';
}

export default RefIcon;
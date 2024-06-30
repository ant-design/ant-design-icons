// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileFilledSvg} />;

 /**![file](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1NC42IDI4OC43YzYgNiA5LjQgMTQuMSA5LjQgMjIuNlY5MjhjMCAxNy43LTE0LjMgMzItMzIgMzJIMTkyYy0xNy43IDAtMzItMTQuMy0zMi0zMlY5NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmg0MjQuN2M4LjUgMCAxNi43IDMuNCAyMi43IDkuNGwyMTUuMiAyMTUuM3pNNzkwLjIgMzI2TDYwMiAxMzcuOFYzMjZoMTg4LjJ6IiAvPjwvc3ZnPg==) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileFilled';
}

export default RefIcon;
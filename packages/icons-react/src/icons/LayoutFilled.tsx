// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LayoutFilledSvg} />;

 /**![layout](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM4NCA5MTJoNDk2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjM0MEgzODR2NTcyem00OTYtODAwSDM4NHYxNjRoNTI4VjE0NGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTc2OCAzMnY3MzZjMCAxNy43IDE0LjMgMzIgMzIgMzJoMTc2VjExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIgLz48L3N2Zz4=) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LayoutFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutFilled';
}

export default RefIcon;
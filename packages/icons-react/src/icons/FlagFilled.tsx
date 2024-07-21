// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlagFilledSvg} />;

 /**![flag](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg4MCAzMDVINjI0VjE5MmMwLTE3LjctMTQuMy0zMi0zMi0zMkgxODR2LTQwYzAtNC40LTMuNi04LTgtOGgtNTZjLTQuNCAwLTggMy42LTggOHY3ODRjMCA0LjQgMy42IDggOCA4aDU2YzQuNCAwIDgtMy42IDgtOFY2NDBoMjQ4djExM2MwIDE3LjcgMTQuMyAzMiAzMiAzMmg0MTZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzM3YzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIgLz48L3N2Zz4=) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FlagFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FlagFilled';
}

export default RefIcon;
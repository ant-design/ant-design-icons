// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbFilledSvg} />;

 /**![bulb](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM0OCA2NzYuMUMyNTAgNjE5LjQgMTg0IDUxMy40IDE4NCAzOTJjMC0xODEuMSAxNDYuOS0zMjggMzI4LTMyOHMzMjggMTQ2LjkgMzI4IDMyOGMwIDEyMS40LTY2IDIyNy40LTE2NCAyODQuMVY3OTJjMCAxNy43LTE0LjMgMzItMzIgMzJIMzgwYy0xNy43IDAtMzItMTQuMy0zMi0zMlY2NzYuMXpNMzkyIDg4OGgyNDBjNC40IDAgOCAzLjYgOCA4djMyYzAgMTcuNy0xNC4zIDMyLTMyIDMySDQxNmMtMTcuNyAwLTMyLTE0LjMtMzItMzJ2LTMyYzAtNC40IDMuNi04IDgtOHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BulbFilled';
}

export default RefIcon;
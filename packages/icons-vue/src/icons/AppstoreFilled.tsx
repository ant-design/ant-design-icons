// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppstoreFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppstoreFilledSvg}></AntdIcon>;
};

AppstoreFilled.displayName = 'AppstoreFilled';
AppstoreFilled.inheritAttrs = false;
export default AppstoreFilled;
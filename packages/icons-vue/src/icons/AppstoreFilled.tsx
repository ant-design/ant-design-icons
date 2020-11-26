// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AppstoreFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AppstoreFilled: AppstoreFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppstoreFilledSvg}></AntdIcon>;
};

AppstoreFilled.displayName = 'AppstoreFilled';
AppstoreFilled.inheritAttrs = false;
export default AppstoreFilled;
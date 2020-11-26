// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AppstoreOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AppstoreOutlined: AppstoreOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppstoreOutlinedSvg}></AntdIcon>;
};

AppstoreOutlined.displayName = 'AppstoreOutlined';
AppstoreOutlined.inheritAttrs = false;
export default AppstoreOutlined;
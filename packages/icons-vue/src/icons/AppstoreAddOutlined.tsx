// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AppstoreAddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AppstoreAddOutlined: AppstoreAddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppstoreAddOutlinedSvg}></AntdIcon>;
};

AppstoreAddOutlined.displayName = 'AppstoreAddOutlined';
AppstoreAddOutlined.inheritAttrs = false;
export default AppstoreAddOutlined;
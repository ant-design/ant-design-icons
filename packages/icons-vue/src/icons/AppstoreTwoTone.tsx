// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AppstoreTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AppstoreTwoTone: AppstoreTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AppstoreTwoToneSvg}></AntdIcon>;
};

AppstoreTwoTone.displayName = 'AppstoreTwoTone';
AppstoreTwoTone.inheritAttrs = false;
export default AppstoreTwoTone;
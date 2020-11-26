// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ApiTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ApiTwoTone: ApiTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ApiTwoToneSvg}></AntdIcon>;
};

ApiTwoTone.displayName = 'ApiTwoTone';
ApiTwoTone.inheritAttrs = false;
export default ApiTwoTone;
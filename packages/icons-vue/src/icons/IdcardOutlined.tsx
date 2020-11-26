// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IdcardOutlinedSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IdcardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IdcardOutlined: IdcardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IdcardOutlinedSvg}></AntdIcon>;
};

IdcardOutlined.displayName = 'IdcardOutlined';
IdcardOutlined.inheritAttrs = false;
export default IdcardOutlined;
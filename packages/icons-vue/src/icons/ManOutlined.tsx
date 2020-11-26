// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManOutlined: ManOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManOutlinedSvg}></AntdIcon>;
};

ManOutlined.displayName = 'ManOutlined';
ManOutlined.inheritAttrs = false;
export default ManOutlined;
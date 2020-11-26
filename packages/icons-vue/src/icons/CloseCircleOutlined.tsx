// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleOutlined: CloseCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleOutlinedSvg}></AntdIcon>;
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
CloseCircleOutlined.inheritAttrs = false;
export default CloseCircleOutlined;
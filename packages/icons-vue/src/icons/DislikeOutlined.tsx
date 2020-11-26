// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeOutlined: DislikeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeOutlinedSvg}></AntdIcon>;
};

DislikeOutlined.displayName = 'DislikeOutlined';
DislikeOutlined.inheritAttrs = false;
export default DislikeOutlined;
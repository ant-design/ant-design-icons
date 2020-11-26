// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlaySquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlaySquareOutlined: PlaySquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaySquareOutlinedSvg}></AntdIcon>;
};

PlaySquareOutlined.displayName = 'PlaySquareOutlined';
PlaySquareOutlined.inheritAttrs = false;
export default PlaySquareOutlined;
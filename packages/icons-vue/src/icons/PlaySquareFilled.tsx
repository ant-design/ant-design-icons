// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlaySquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlaySquareFilled: PlaySquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaySquareFilledSvg}></AntdIcon>;
};

PlaySquareFilled.displayName = 'PlaySquareFilled';
PlaySquareFilled.inheritAttrs = false;
export default PlaySquareFilled;
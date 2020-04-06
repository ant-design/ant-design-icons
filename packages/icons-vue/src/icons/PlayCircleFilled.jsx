// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled';

export default {
  name: 'IconPlayCircleFilled',
  displayName: 'PlayCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlayCircleFilledSvg } },
      children,
    ),
};
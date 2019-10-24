
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FullscreenOutlineSvg from '@ant-design/icons-svg/lib/outline/FullscreenOutline';

export default {
  name: 'IconFullscreen',
  displayName: 'Fullscreen',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FullscreenOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FullscreenExitOutlineSvg from '@ant-design/icons-svg/lib/outline/FullscreenExitOutline';

export default {
  name: 'IconFullscreenExit',
  displayName: 'FullscreenExit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FullscreenExitOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PauseOutlineSvg from '@ant-design/icons-svg/lib/outline/PauseOutline';

export default {
  name: 'IconPause',
  displayName: 'Pause',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseOutlineSvg } },
      children
    ),
};

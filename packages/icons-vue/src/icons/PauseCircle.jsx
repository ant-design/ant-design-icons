
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PauseCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/PauseCircleOutline';

export default {
  name: 'PauseCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PauseCircleOutlineSvg } },
      children
    ),
};

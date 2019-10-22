
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DashOutlineSvg from '@ant-design/icons-svg/lib/outline/DashOutline';

export default {
  name: 'Dash',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DashOutlineSvg } },
      children
    ),
};

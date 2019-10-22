
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SmallDashOutlineSvg from '@ant-design/icons-svg/lib/outline/SmallDashOutline';

export default {
  name: 'SmallDash',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SmallDashOutlineSvg } },
      children
    ),
};

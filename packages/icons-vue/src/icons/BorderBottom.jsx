
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderBottomOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderBottomOutline';

export default {
  name: 'BorderBottom',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderBottomOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderTopOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderTopOutline';

export default {
  name: 'BorderTop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderTopOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderHorizontalOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderHorizontalOutline';

export default {
  name: 'BorderHorizontal',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderHorizontalOutlineSvg } },
      children
    ),
};

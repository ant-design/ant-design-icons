
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderLeftOutline';

export default {
  name: 'IconBorderLeft',
  displayName: 'BorderLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderLeftOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderInnerOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderInnerOutline';

export default {
  name: 'IconBorderInner',
  displayName: 'BorderInner',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderInnerOutlineSvg } },
      children
    ),
};

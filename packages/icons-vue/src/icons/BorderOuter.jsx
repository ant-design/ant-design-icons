
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderOuterOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderOuterOutline';

export default {
  name: 'IconBorderOuter',
  displayName: 'BorderOuter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderOuterOutlineSvg } },
      children
    ),
};

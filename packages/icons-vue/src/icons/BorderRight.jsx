
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderRightOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderRightOutline';

export default {
  name: 'IconBorderRight',
  displayName: 'BorderRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderRightOutlineSvg } },
      children
    ),
};

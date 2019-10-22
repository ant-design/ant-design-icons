
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusBottomrightOutlineSvg from '@ant-design/icons-svg/lib/outline/RadiusBottomrightOutline';

export default {
  name: 'RadiusBottomright',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusBottomrightOutlineSvg } },
      children
    ),
};

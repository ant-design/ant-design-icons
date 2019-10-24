
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FrownOutlineSvg from '@ant-design/icons-svg/lib/outline/FrownOutline';

export default {
  name: 'IconFrown',
  displayName: 'Frown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FrownOutlineSvg } },
      children
    ),
};

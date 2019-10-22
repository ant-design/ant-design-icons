
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CrownOutlineSvg from '@ant-design/icons-svg/lib/outline/CrownOutline';

export default {
  name: 'Crown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CrownOutlineSvg } },
      children
    ),
};

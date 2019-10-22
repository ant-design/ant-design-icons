
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FallOutlineSvg from '@ant-design/icons-svg/lib/outline/FallOutline';

export default {
  name: 'Fall',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FallOutlineSvg } },
      children
    ),
};

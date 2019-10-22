
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RiseOutlineSvg from '@ant-design/icons-svg/lib/outline/RiseOutline';

export default {
  name: 'Rise',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RiseOutlineSvg } },
      children
    ),
};

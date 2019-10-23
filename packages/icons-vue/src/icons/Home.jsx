
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HomeOutlineSvg from '@ant-design/icons-svg/lib/outline/HomeOutline';

export default {
  name: 'IconHome',
  displayName: 'Home',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HomeOutlineSvg } },
      children
    ),
};

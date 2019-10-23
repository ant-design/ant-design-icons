
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CiOutlineSvg from '@ant-design/icons-svg/lib/outline/CiOutline';

export default {
  name: 'IconCi',
  displayName: 'Ci',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CiOutlineSvg } },
      children
    ),
};

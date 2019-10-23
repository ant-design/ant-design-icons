
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FireOutlineSvg from '@ant-design/icons-svg/lib/outline/FireOutline';

export default {
  name: 'IconFire',
  displayName: 'Fire',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FireOutlineSvg } },
      children
    ),
};

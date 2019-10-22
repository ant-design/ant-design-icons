
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastForwardOutlineSvg from '@ant-design/icons-svg/lib/outline/FastForwardOutline';

export default {
  name: 'FastForward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FastForwardOutlineSvg } },
      children
    ),
};

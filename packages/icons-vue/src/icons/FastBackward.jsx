
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastBackwardOutlineSvg from '@ant-design/icons-svg/lib/outline/FastBackwardOutline';

export default {
  name: 'FastBackward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FastBackwardOutlineSvg } },
      children
    ),
};

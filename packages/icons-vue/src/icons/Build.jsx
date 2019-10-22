
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BuildOutlineSvg from '@ant-design/icons-svg/lib/outline/BuildOutline';

export default {
  name: 'Build',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BuildOutlineSvg } },
      children
    ),
};

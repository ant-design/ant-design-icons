
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DiffOutlineSvg from '@ant-design/icons-svg/lib/outline/DiffOutline';

export default {
  name: 'IconDiff',
  displayName: 'Diff',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DiffOutlineSvg } },
      children
    ),
};

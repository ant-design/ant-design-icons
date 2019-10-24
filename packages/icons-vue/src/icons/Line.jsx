
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LineOutlineSvg from '@ant-design/icons-svg/lib/outline/LineOutline';

export default {
  name: 'IconLine',
  displayName: 'Line',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LineOutlineSvg } },
      children
    ),
};

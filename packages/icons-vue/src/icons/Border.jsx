
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderOutline';

export default {
  name: 'IconBorder',
  displayName: 'Border',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderOutlineSvg } },
      children
    ),
};

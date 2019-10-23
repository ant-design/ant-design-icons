
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UnderlineOutlineSvg from '@ant-design/icons-svg/lib/outline/UnderlineOutline';

export default {
  name: 'IconUnderline',
  displayName: 'Underline',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnderlineOutlineSvg } },
      children
    ),
};

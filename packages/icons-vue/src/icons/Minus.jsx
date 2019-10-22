
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusOutlineSvg from '@ant-design/icons-svg/lib/outline/MinusOutline';

export default {
  name: 'Minus',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusOutlineSvg } },
      children
    ),
};

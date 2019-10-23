
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/MinusCircleOutline';

export default {
  name: 'IconMinusCircle',
  displayName: 'MinusCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusCircleOutlineSvg } },
      children
    ),
};

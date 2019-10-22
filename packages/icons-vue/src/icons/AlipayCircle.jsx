
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlipayCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/AlipayCircleOutline';

export default {
  name: 'AlipayCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipayCircleOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlipayOutlineSvg from '@ant-design/icons-svg/lib/outline/AlipayOutline';

export default {
  name: 'Alipay',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipayOutlineSvg } },
      children
    ),
};

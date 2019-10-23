
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlipaySquareFillSvg from '@ant-design/icons-svg/lib/fill/AlipaySquareFill';

export default {
  name: 'IconAlipaySquareFilled',
  displayName: 'AlipaySquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipaySquareFillSvg } },
      children
    ),
};

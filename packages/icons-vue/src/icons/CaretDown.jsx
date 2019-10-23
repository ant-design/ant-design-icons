
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretDownOutlineSvg from '@ant-design/icons-svg/lib/outline/CaretDownOutline';

export default {
  name: 'IconCaretDown',
  displayName: 'CaretDown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretDownOutlineSvg } },
      children
    ),
};

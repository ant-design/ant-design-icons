
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretDownFillSvg from '@ant-design/icons-svg/lib/fill/CaretDownFill';

export default {
  name: 'CaretDownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretDownFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarFillSvg from '@ant-design/icons-svg/lib/fill/CarFill';

export default {
  name: 'CarFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarFillSvg } },
      children
    ),
};

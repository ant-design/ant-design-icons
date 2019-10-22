
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarryOutFillSvg from '@ant-design/icons-svg/lib/fill/CarryOutFill';

export default {
  name: 'CarryOutFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarryOutFillSvg } },
      children
    ),
};

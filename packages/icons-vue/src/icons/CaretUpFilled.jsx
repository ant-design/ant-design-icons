
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretUpFillSvg from '@ant-design/icons-svg/lib/fill/CaretUpFill';

export default {
  name: 'CaretUpFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretUpFillSvg } },
      children
    ),
};

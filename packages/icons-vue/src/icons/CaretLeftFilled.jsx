
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretLeftFillSvg from '@ant-design/icons-svg/lib/fill/CaretLeftFill';

export default {
  name: 'IconCaretLeftFilled',
  displayName: 'CaretLeftFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretLeftFillSvg } },
      children
    ),
};

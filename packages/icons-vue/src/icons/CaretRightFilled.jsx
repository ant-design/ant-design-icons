
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretRightFillSvg from '@ant-design/icons-svg/lib/fill/CaretRightFill';

export default {
  name: 'IconCaretRightFilled',
  displayName: 'CaretRightFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretRightFillSvg } },
      children
    ),
};

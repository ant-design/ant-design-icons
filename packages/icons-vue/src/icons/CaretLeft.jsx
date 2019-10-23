
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/CaretLeftOutline';

export default {
  name: 'IconCaretLeft',
  displayName: 'CaretLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretLeftOutlineSvg } },
      children
    ),
};

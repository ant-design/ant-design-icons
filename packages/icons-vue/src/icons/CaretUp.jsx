
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretUpOutlineSvg from '@ant-design/icons-svg/lib/outline/CaretUpOutline';

export default {
  name: 'IconCaretUp',
  displayName: 'CaretUp',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretUpOutlineSvg } },
      children
    ),
};

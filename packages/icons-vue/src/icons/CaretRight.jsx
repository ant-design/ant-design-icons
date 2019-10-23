
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretRightOutlineSvg from '@ant-design/icons-svg/lib/outline/CaretRightOutline';

export default {
  name: 'IconCaretRight',
  displayName: 'CaretRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretRightOutlineSvg } },
      children
    ),
};

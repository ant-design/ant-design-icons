
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ColumnHeightOutlineSvg from '@ant-design/icons-svg/lib/outline/ColumnHeightOutline';

export default {
  name: 'IconColumnHeight',
  displayName: 'ColumnHeight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ColumnHeightOutlineSvg } },
      children
    ),
};

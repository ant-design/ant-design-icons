
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ColumHeightOutlineSvg from '@ant-design/icons-svg/lib/outline/ColumHeightOutline';

export default {
  name: 'ColumHeight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ColumHeightOutlineSvg } },
      children
    ),
};

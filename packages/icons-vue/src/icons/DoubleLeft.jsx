
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DoubleLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/DoubleLeftOutline';

export default {
  name: 'IconDoubleLeft',
  displayName: 'DoubleLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DoubleLeftOutlineSvg } },
      children
    ),
};

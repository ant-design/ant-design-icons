
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftOutlineSvg from '@ant-design/icons-svg/lib/outline/LeftOutline';

export default {
  name: 'IconLeft',
  displayName: 'Left',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftOutlineSvg } },
      children
    ),
};

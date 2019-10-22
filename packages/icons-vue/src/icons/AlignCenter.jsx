
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlignCenterOutlineSvg from '@ant-design/icons-svg/lib/outline/AlignCenterOutline';

export default {
  name: 'AlignCenter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlignCenterOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlignLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/AlignLeftOutline';

export default {
  name: 'IconAlignLeft',
  displayName: 'AlignLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlignLeftOutlineSvg } },
      children
    ),
};

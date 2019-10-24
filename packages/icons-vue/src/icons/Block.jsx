
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BlockOutlineSvg from '@ant-design/icons-svg/lib/outline/BlockOutline';

export default {
  name: 'IconBlock',
  displayName: 'Block',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BlockOutlineSvg } },
      children
    ),
};

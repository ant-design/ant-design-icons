
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CopyOutlineSvg from '@ant-design/icons-svg/lib/outline/CopyOutline';

export default {
  name: 'IconCopy',
  displayName: 'Copy',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ToolFillSvg from '@ant-design/icons-svg/lib/fill/ToolFill';

export default {
  name: 'IconToolFilled',
  displayName: 'ToolFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ToolFillSvg } },
      children
    ),
};

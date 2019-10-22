
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseOutlineSvg from '@ant-design/icons-svg/lib/outline/CloseOutline';

export default {
  name: 'Close',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseOutlineSvg } },
      children
    ),
};

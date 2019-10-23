
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BackwardOutlineSvg from '@ant-design/icons-svg/lib/outline/BackwardOutline';

export default {
  name: 'IconBackward',
  displayName: 'Backward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BackwardOutlineSvg } },
      children
    ),
};

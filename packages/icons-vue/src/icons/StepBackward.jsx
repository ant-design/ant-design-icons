
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepBackwardOutlineSvg from '@ant-design/icons-svg/lib/outline/StepBackwardOutline';

export default {
  name: 'StepBackward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepBackwardOutlineSvg } },
      children
    ),
};

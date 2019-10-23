
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepForwardOutlineSvg from '@ant-design/icons-svg/lib/outline/StepForwardOutline';

export default {
  name: 'IconStepForward',
  displayName: 'StepForward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepForwardOutlineSvg } },
      children
    ),
};

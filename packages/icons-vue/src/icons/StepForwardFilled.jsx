
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepForwardFillSvg from '@ant-design/icons-svg/lib/fill/StepForwardFill';

export default {
  name: 'IconStepForwardFilled',
  displayName: 'StepForwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepForwardFillSvg } },
      children
    ),
};

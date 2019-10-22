
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepBackwardFillSvg from '@ant-design/icons-svg/lib/fill/StepBackwardFill';

export default {
  name: 'StepBackwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StepBackwardFillSvg } },
      children
    ),
};

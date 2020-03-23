// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled';

export default {
  name: 'IconStepBackwardFilled',
  displayName: 'StepBackwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StepBackwardFilledSvg } },
      children,
    ),
};
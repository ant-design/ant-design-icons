// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled';

export default {
  name: 'IconStepForwardFilled',
  displayName: 'StepForwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StepForwardFilledSvg } },
      children,
    ),
};
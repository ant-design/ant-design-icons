// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined';

export default {
  name: 'IconStepBackwardOutlined',
  displayName: 'StepBackwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StepBackwardOutlinedSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled';

export default {
  name: 'IconPauseCircleFilled',
  displayName: 'PauseCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PauseCircleFilledSvg } },
      children,
    ),
};
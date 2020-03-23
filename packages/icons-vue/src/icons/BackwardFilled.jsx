// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled';

export default {
  name: 'IconBackwardFilled',
  displayName: 'BackwardFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BackwardFilledSvg } },
      children,
    ),
};
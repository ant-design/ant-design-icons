// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';

export default {
  name: 'IconBellFilled',
  displayName: 'BellFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BellFilledSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';

export default {
  name: 'IconFlagFilled',
  displayName: 'FlagFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FlagFilledSvg } },
      children,
    ),
};
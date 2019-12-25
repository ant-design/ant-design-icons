// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';

export default {
  name: 'IconWarningFilled',
  displayName: 'WarningFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WarningFilledSvg } },
      children,
    ),
};
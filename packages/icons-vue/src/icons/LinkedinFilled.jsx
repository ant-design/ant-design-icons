// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled';

export default {
  name: 'IconLinkedinFilled',
  displayName: 'LinkedinFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LinkedinFilledSvg } },
      children,
    ),
};
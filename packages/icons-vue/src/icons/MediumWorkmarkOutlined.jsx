// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined';

export default {
  name: 'IconMediumWorkmarkOutlined',
  displayName: 'MediumWorkmarkOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MediumWorkmarkOutlinedSvg } },
      children,
    ),
};
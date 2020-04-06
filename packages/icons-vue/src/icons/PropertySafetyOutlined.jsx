// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined';

export default {
  name: 'IconPropertySafetyOutlined',
  displayName: 'PropertySafetyOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PropertySafetyOutlinedSvg } },
      children,
    ),
};
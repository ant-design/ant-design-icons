// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled';

export default {
  name: 'IconCloudFilled',
  displayName: 'CloudFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudFilledSvg } },
      children,
    ),
};
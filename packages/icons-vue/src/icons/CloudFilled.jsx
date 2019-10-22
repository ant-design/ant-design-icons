// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled'

export default {
  name: 'CloudFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudFilledSvg } },
      children
    )
};
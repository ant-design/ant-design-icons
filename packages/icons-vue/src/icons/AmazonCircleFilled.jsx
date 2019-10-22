// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled'

export default {
  name: 'AmazonCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AmazonCircleFilledSvg } },
      children
    )
};
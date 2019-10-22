// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import Loading3QuartersSvg from '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined'

export default {
  name: 'Loading3Quarters',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Loading3QuartersSvg } },
      children
    )
};
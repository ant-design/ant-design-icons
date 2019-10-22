// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ClusterSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined'

export default {
  name: 'Cluster',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ClusterSvg } },
      children
    )
};
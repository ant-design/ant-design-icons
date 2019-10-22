// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AntCloudSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined'

export default {
  name: 'AntCloud',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AntCloudSvg } },
      children
    )
};
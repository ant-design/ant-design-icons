// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RestSvg from '@ant-design/icons-svg/lib/asn/RestOutlined'

export default {
  name: 'Rest',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RestSvg } },
      children
    )
};
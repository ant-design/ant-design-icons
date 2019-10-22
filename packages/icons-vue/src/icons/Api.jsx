// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ApiSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined'

export default {
  name: 'Api',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApiSvg } },
      children
    )
};
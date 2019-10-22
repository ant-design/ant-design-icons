// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import EuroSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined'

export default {
  name: 'Euro',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EuroSvg } },
      children
    )
};
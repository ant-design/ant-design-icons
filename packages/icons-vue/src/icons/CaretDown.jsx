// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CaretDownSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined'

export default {
  name: 'CaretDown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CaretDownSvg } },
      children
    )
};
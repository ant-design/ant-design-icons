// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ApartmentSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined'

export default {
  name: 'Apartment',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApartmentSvg } },
      children
    )
};
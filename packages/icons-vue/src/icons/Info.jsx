// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InfoSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined'

export default {
  name: 'Info',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoSvg } },
      children
    )
};
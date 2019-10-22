// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AppstoreSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined'

export default {
  name: 'Appstore',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppstoreSvg } },
      children
    )
};
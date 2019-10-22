// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UsergroupDeleteSvg from '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined'

export default {
  name: 'UsergroupDelete',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsergroupDeleteSvg } },
      children
    )
};
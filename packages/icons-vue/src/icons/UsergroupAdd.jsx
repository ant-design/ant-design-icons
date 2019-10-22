// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UsergroupAddSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined'

export default {
  name: 'UsergroupAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsergroupAddSvg } },
      children
    )
};
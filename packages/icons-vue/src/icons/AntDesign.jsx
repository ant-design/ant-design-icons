// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AntDesignSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined'

export default {
  name: 'AntDesign',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AntDesignSvg } },
      children
    )
};
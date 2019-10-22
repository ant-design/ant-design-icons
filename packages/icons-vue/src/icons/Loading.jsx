// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import LoadingSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined'

export default {
  name: 'Loading',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LoadingSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import IeSvg from '@ant-design/icons-svg/lib/asn/IeOutlined'

export default {
  name: 'Ie',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IeSvg } },
      children
    )
};
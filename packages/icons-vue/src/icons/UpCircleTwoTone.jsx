// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone'

export default {
  name: 'UpCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpCircleTwoToneSvg } },
      children
    )
};
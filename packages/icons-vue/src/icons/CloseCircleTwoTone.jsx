// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CloseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseCircleTwoTone'

export default {
  name: 'CloseCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseCircleTwoToneSvg } },
      children
    )
};
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled'

export default {
  name: 'PlayCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlayCircleFilledSvg } },
      children
    )
};
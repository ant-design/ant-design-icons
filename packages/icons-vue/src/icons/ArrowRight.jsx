// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ArrowRightSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutlined'

export default {
  name: 'ArrowRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowRightSvg } },
      children
    )
};
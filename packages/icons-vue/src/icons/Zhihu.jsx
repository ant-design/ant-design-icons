// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ZhihuSvg from '@ant-design/icons-svg/lib/asn/ZhihuOutlined'

export default {
  name: 'Zhihu',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZhihuSvg } },
      children
    )
};
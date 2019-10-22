// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AliyunSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined'

export default {
  name: 'Aliyun',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AliyunSvg } },
      children
    )
};
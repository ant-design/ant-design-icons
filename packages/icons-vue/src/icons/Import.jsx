// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ImportSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined'

export default {
  name: 'Import',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ImportSvg } },
      children
    )
};
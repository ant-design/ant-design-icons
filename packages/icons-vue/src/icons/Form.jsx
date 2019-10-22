// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FormSvg from '@ant-design/icons-svg/lib/asn/FormOutlined'

export default {
  name: 'Form',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FormSvg } },
      children
    )
};
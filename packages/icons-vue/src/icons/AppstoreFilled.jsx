// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled'

export default {
  name: 'AppstoreFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppstoreFilledSvg } },
      children
    )
};
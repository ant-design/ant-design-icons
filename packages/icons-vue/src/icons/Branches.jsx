// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import BranchesSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined'

export default {
  name: 'Branches',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BranchesSvg } },
      children
    )
};
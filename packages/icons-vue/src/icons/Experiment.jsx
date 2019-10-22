// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ExperimentSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined'

export default {
  name: 'Experiment',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExperimentSvg } },
      children
    )
};
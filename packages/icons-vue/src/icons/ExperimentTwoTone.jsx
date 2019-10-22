// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone'

export default {
  name: 'ExperimentTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExperimentTwoToneSvg } },
      children
    )
};
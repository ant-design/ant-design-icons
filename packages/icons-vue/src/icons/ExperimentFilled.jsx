// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled';

export default {
  name: 'IconExperimentFilled',
  displayName: 'ExperimentFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExperimentFilledSvg } },
      children,
    ),
};
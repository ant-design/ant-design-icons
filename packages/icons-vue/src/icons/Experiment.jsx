
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExperimentOutlineSvg from '@ant-design/icons-svg/lib/outline/ExperimentOutline';

export default {
  name: 'Experiment',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExperimentOutlineSvg } },
      children
    ),
};

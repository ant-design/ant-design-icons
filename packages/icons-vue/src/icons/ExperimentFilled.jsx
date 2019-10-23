
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExperimentFillSvg from '@ant-design/icons-svg/lib/fill/ExperimentFill';

export default {
  name: 'IconExperimentFilled',
  displayName: 'ExperimentFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExperimentFillSvg } },
      children
    ),
};

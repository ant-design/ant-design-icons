
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ExperimentTwoTone';

export default {
  name: 'IconExperimentTwoTone',
  displayName: 'ExperimentTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExperimentTwoToneSvg } },
      children
    ),
};

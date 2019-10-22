
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ProjectTwoTone';

export default {
  name: 'ProjectTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProjectTwoToneSvg } },
      children
    ),
};

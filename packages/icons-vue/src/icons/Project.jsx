
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProjectOutlineSvg from '@ant-design/icons-svg/lib/outline/ProjectOutline';

export default {
  name: 'Project',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProjectOutlineSvg } },
      children
    ),
};

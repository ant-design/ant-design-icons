
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProjectFillSvg from '@ant-design/icons-svg/lib/fill/ProjectFill';

export default {
  name: 'IconProjectFilled',
  displayName: 'ProjectFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProjectFillSvg } },
      children
    ),
};

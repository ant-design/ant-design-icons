
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SolutionOutlineSvg from '@ant-design/icons-svg/lib/outline/SolutionOutline';

export default {
  name: 'IconSolution',
  displayName: 'Solution',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SolutionOutlineSvg } },
      children
    ),
};

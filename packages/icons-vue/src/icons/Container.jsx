
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContainerOutlineSvg from '@ant-design/icons-svg/lib/outline/ContainerOutline';

export default {
  name: 'Container',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContainerOutlineSvg } },
      children
    ),
};

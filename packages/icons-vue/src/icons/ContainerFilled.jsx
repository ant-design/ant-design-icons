
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContainerFillSvg from '@ant-design/icons-svg/lib/fill/ContainerFill';

export default {
  name: 'ContainerFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContainerFillSvg } },
      children
    ),
};

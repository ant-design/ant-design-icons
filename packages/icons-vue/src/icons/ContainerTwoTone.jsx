
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ContainerTwoTone';

export default {
  name: 'ContainerTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContainerTwoToneSvg } },
      children
    ),
};

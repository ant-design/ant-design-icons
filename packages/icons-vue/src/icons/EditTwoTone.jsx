
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EditTwoToneSvg from '@ant-design/icons-svg/lib/twotone/EditTwoTone';

export default {
  name: 'IconEditTwoTone',
  displayName: 'EditTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EditTwoToneSvg } },
      children
    ),
};

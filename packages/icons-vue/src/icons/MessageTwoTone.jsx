
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MessageTwoToneSvg from '@ant-design/icons-svg/lib/twotone/MessageTwoTone';

export default {
  name: 'MessageTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MessageTwoToneSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MessageFillSvg from '@ant-design/icons-svg/lib/fill/MessageFill';

export default {
  name: 'MessageFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MessageFillSvg } },
      children
    ),
};

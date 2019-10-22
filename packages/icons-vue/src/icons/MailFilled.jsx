
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MailFillSvg from '@ant-design/icons-svg/lib/fill/MailFill';

export default {
  name: 'MailFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MailFillSvg } },
      children
    ),
};

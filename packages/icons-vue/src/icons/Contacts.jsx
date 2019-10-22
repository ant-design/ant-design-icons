
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContactsOutlineSvg from '@ant-design/icons-svg/lib/outline/ContactsOutline';

export default {
  name: 'Contacts',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContactsOutlineSvg } },
      children
    ),
};

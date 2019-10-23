
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContactsFillSvg from '@ant-design/icons-svg/lib/fill/ContactsFill';

export default {
  name: 'IconContactsFilled',
  displayName: 'ContactsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContactsFillSvg } },
      children
    ),
};

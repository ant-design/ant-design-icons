
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ApiFillSvg from '@ant-design/icons-svg/lib/fill/ApiFill';

export default {
  name: 'IconApiFilled',
  displayName: 'ApiFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApiFillSvg } },
      children
    ),
};

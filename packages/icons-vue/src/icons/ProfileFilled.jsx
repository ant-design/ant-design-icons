
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProfileFillSvg from '@ant-design/icons-svg/lib/fill/ProfileFill';

export default {
  name: 'ProfileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ProfileFillSvg } },
      children
    ),
};

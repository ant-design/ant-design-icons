
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InstagramFillSvg from '@ant-design/icons-svg/lib/fill/InstagramFill';

export default {
  name: 'InstagramFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InstagramFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShareAltOutlineSvg from '@ant-design/icons-svg/lib/outline/ShareAltOutline';

export default {
  name: 'ShareAlt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShareAltOutlineSvg } },
      children
    ),
};

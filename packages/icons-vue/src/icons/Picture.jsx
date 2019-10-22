
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PictureOutlineSvg from '@ant-design/icons-svg/lib/outline/PictureOutline';

export default {
  name: 'Picture',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PictureOutlineSvg } },
      children
    ),
};

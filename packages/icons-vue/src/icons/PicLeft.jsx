
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PicLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/PicLeftOutline';

export default {
  name: 'IconPicLeft',
  displayName: 'PicLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PicLeftOutlineSvg } },
      children
    ),
};

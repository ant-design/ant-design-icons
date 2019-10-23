
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PicRightOutlineSvg from '@ant-design/icons-svg/lib/outline/PicRightOutline';

export default {
  name: 'IconPicRight',
  displayName: 'PicRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PicRightOutlineSvg } },
      children
    ),
};

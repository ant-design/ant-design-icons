
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlignRightOutlineSvg from '@ant-design/icons-svg/lib/outline/AlignRightOutline';

export default {
  name: 'IconAlignRight',
  displayName: 'AlignRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlignRightOutlineSvg } },
      children
    ),
};

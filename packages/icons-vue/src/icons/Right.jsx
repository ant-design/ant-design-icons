
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightOutlineSvg from '@ant-design/icons-svg/lib/outline/RightOutline';

export default {
  name: 'IconRight',
  displayName: 'Right',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightOutlineSvg } },
      children
    ),
};

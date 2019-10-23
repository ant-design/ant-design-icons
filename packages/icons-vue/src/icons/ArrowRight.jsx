
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowRightOutlineSvg from '@ant-design/icons-svg/lib/outline/ArrowRightOutline';

export default {
  name: 'IconArrowRight',
  displayName: 'ArrowRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowRightOutlineSvg } },
      children
    ),
};

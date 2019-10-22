
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DoubleRightOutlineSvg from '@ant-design/icons-svg/lib/outline/DoubleRightOutline';

export default {
  name: 'DoubleRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DoubleRightOutlineSvg } },
      children
    ),
};

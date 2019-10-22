
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SmileOutlineSvg from '@ant-design/icons-svg/lib/outline/SmileOutline';

export default {
  name: 'Smile',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SmileOutlineSvg } },
      children
    ),
};

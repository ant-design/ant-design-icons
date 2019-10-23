
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ForwardOutlineSvg from '@ant-design/icons-svg/lib/outline/ForwardOutline';

export default {
  name: 'IconForward',
  displayName: 'Forward',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ForwardOutlineSvg } },
      children
    ),
};

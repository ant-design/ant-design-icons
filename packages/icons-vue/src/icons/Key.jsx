
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import KeyOutlineSvg from '@ant-design/icons-svg/lib/outline/KeyOutline';

export default {
  name: 'IconKey',
  displayName: 'Key',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: KeyOutlineSvg } },
      children
    ),
};

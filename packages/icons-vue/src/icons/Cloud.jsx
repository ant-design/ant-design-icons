
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudOutlineSvg from '@ant-design/icons-svg/lib/outline/CloudOutline';

export default {
  name: 'IconCloud',
  displayName: 'Cloud',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudOutlineSvg } },
      children
    ),
};

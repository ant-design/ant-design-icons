
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ManOutlineSvg from '@ant-design/icons-svg/lib/outline/ManOutline';

export default {
  name: 'IconMan',
  displayName: 'Man',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ManOutlineSvg } },
      children
    ),
};

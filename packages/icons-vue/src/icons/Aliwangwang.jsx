
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AliwangwangOutlineSvg from '@ant-design/icons-svg/lib/outline/AliwangwangOutline';

export default {
  name: 'IconAliwangwang',
  displayName: 'Aliwangwang',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AliwangwangOutlineSvg } },
      children
    ),
};

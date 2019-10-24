
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AntDesignOutlineSvg from '@ant-design/icons-svg/lib/outline/AntDesignOutline';

export default {
  name: 'IconAntDesign',
  displayName: 'AntDesign',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AntDesignOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkypeOutlineSvg from '@ant-design/icons-svg/lib/outline/SkypeOutline';

export default {
  name: 'Skype',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkypeOutlineSvg } },
      children
    ),
};

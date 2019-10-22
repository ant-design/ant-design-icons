
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PhoneTwoTone';

export default {
  name: 'PhoneTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PhoneTwoToneSvg } },
      children
    ),
};

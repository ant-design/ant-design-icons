
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/UpSquareTwoTone';

export default {
  name: 'UpSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSquareTwoToneSvg } },
      children
    ),
};

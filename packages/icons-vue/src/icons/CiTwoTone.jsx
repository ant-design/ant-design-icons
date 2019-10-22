
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CiTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CiTwoTone';

export default {
  name: 'CiTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CiTwoToneSvg } },
      children
    ),
};

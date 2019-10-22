
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CanlendarTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CanlendarTwoTone';

export default {
  name: 'CanlendarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CanlendarTwoToneSvg } },
      children
    ),
};

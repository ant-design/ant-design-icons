
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StopTwoToneSvg from '@ant-design/icons-svg/lib/twotone/StopTwoTone';

export default {
  name: 'StopTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StopTwoToneSvg } },
      children
    ),
};

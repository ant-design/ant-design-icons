
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PoundCircleTwoTone';

export default {
  name: 'PoundCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoundCircleTwoToneSvg } },
      children
    ),
};

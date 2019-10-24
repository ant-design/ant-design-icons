
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DiffTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DiffTwoTone';

export default {
  name: 'IconDiffTwoTone',
  displayName: 'DiffTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DiffTwoToneSvg } },
      children
    ),
};

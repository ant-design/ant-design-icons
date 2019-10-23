
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CopyrightTwoTone';

export default {
  name: 'IconCopyrightTwoTone',
  displayName: 'CopyrightTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyrightTwoToneSvg } },
      children
    ),
};

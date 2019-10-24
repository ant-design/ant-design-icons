
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FireTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FireTwoTone';

export default {
  name: 'IconFireTwoTone',
  displayName: 'FireTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FireTwoToneSvg } },
      children
    ),
};

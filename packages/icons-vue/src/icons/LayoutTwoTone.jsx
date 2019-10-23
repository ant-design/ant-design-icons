
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/twotone/LayoutTwoTone';

export default {
  name: 'IconLayoutTwoTone',
  displayName: 'LayoutTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LayoutTwoToneSvg } },
      children
    ),
};

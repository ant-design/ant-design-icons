
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TabletTwoToneSvg from '@ant-design/icons-svg/lib/twotone/TabletTwoTone';

export default {
  name: 'TabletTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TabletTwoToneSvg } },
      children
    ),
};

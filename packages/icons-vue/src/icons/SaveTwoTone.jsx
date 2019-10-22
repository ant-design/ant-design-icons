
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SaveTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SaveTwoTone';

export default {
  name: 'SaveTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SaveTwoToneSvg } },
      children
    ),
};

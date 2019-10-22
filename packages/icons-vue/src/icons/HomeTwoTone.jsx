
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/twotone/HomeTwoTone';

export default {
  name: 'HomeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HomeTwoToneSvg } },
      children
    ),
};

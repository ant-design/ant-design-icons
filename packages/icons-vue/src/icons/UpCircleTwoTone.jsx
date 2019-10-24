
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/UpCircleTwoTone';

export default {
  name: 'IconUpCircleTwoTone',
  displayName: 'UpCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpCircleTwoToneSvg } },
      children
    ),
};

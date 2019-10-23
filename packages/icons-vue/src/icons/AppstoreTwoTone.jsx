
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/twotone/AppstoreTwoTone';

export default {
  name: 'IconAppstoreTwoTone',
  displayName: 'AppstoreTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppstoreTwoToneSvg } },
      children
    ),
};

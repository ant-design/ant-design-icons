
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CloseCircleTwoTone';

export default {
  name: 'IconCloseCircleTwoTone',
  displayName: 'CloseCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseCircleTwoToneSvg } },
      children
    ),
};

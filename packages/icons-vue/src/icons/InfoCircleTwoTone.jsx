
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InfoCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/InfoCircleTwoTone';

export default {
  name: 'InfoCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoCircleTwoToneSvg } },
      children
    ),
};

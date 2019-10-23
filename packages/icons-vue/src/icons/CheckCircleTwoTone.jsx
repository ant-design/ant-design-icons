
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CheckCircleTwoTone';

export default {
  name: 'IconCheckCircleTwoTone',
  displayName: 'CheckCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckCircleTwoToneSvg } },
      children
    ),
};

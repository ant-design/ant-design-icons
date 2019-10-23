
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ExclamationCircleTwoTone';

export default {
  name: 'IconExclamationCircleTwoTone',
  displayName: 'ExclamationCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationCircleTwoToneSvg } },
      children
    ),
};

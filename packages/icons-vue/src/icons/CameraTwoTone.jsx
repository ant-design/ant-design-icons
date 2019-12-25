// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone';

export default {
  name: 'IconCameraTwoTone',
  displayName: 'CameraTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CameraTwoToneSvg } },
      children,
    ),
};
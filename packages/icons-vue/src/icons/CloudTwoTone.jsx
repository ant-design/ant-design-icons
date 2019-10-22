
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CloudTwoTone';

export default {
  name: 'CloudTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudTwoToneSvg } },
      children
    ),
};

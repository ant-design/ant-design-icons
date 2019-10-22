
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/MinusCircleTwoTone';

export default {
  name: 'MinusCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusCircleTwoToneSvg } },
      children
    ),
};

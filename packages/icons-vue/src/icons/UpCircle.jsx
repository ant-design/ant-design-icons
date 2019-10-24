
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/UpCircleOutline';

export default {
  name: 'IconUpCircle',
  displayName: 'UpCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpCircleOutlineSvg } },
      children
    ),
};

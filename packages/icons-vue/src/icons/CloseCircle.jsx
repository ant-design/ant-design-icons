
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/CloseCircleOutline';

export default {
  name: 'CloseCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseCircleOutlineSvg } },
      children
    ),
};

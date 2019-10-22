
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightCircleFillSvg from '@ant-design/icons-svg/lib/fill/RightCircleFill';

export default {
  name: 'RightCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightCircleFillSvg } },
      children
    ),
};

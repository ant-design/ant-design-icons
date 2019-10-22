
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftCircleFillSvg from '@ant-design/icons-svg/lib/fill/LeftCircleFill';

export default {
  name: 'LeftCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftCircleFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumCircleFillSvg from '@ant-design/icons-svg/lib/fill/MediumCircleFill';

export default {
  name: 'MediumCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumCircleFillSvg } },
      children
    ),
};

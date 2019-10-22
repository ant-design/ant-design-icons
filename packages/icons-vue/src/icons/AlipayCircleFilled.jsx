
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlipayCircleFillSvg from '@ant-design/icons-svg/lib/fill/AlipayCircleFill';

export default {
  name: 'AlipayCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlipayCircleFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedEnvelopeFillSvg from '@ant-design/icons-svg/lib/fill/RedEnvelopeFill';

export default {
  name: 'RedEnvelopeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedEnvelopeFillSvg } },
      children
    ),
};

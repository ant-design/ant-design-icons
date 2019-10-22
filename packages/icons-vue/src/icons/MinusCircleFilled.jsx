
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusCircleFillSvg from '@ant-design/icons-svg/lib/fill/MinusCircleFill';

export default {
  name: 'MinusCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusCircleFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InfoCircleFillSvg from '@ant-design/icons-svg/lib/fill/InfoCircleFill';

export default {
  name: 'InfoCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoCircleFillSvg } },
      children
    ),
};

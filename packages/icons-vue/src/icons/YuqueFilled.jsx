
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YuqueFillSvg from '@ant-design/icons-svg/lib/fill/YuqueFill';

export default {
  name: 'IconYuqueFilled',
  displayName: 'YuqueFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YuqueFillSvg } },
      children
    ),
};

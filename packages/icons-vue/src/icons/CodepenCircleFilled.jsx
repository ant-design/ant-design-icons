
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodepenCircleFillSvg from '@ant-design/icons-svg/lib/fill/CodepenCircleFill';

export default {
  name: 'CodepenCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenCircleFillSvg } },
      children
    ),
};

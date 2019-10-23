
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ThunderboltFillSvg from '@ant-design/icons-svg/lib/fill/ThunderboltFill';

export default {
  name: 'IconThunderboltFilled',
  displayName: 'ThunderboltFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ThunderboltFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagFillSvg from '@ant-design/icons-svg/lib/fill/TagFill';

export default {
  name: 'TagFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagFillSvg } },
      children
    ),
};

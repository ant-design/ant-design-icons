
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagOutlineSvg from '@ant-design/icons-svg/lib/outline/TagOutline';

export default {
  name: 'IconTag',
  displayName: 'Tag',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagOutlineSvg } },
      children
    ),
};

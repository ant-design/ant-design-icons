
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagsOutlineSvg from '@ant-design/icons-svg/lib/outline/TagsOutline';

export default {
  name: 'IconTags',
  displayName: 'Tags',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagsOutlineSvg } },
      children
    ),
};

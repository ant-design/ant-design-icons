
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/twotone/TagsTwoTone';

export default {
  name: 'IconTagsTwoTone',
  displayName: 'TagsTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagsTwoToneSvg } },
      children
    ),
};

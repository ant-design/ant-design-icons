
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagTwoToneSvg from '@ant-design/icons-svg/lib/twotone/TagTwoTone';

export default {
  name: 'TagTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagTwoToneSvg } },
      children
    ),
};

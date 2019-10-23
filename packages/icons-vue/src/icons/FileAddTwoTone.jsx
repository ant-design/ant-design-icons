
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileAddTwoTone';

export default {
  name: 'IconFileAddTwoTone',
  displayName: 'FileAddTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileAddTwoToneSvg } },
      children
    ),
};

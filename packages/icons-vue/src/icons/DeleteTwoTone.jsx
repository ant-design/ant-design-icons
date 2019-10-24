
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DeleteTwoTone';

export default {
  name: 'IconDeleteTwoTone',
  displayName: 'DeleteTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeleteTwoToneSvg } },
      children
    ),
};

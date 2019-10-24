
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ApiTwoTone';

export default {
  name: 'IconApiTwoTone',
  displayName: 'ApiTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApiTwoToneSvg } },
      children
    ),
};

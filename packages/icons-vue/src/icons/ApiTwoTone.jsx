// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone';

export default {
  name: 'IconApiTwoTone',
  displayName: 'ApiTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ApiTwoToneSvg } },
      children,
    ),
};
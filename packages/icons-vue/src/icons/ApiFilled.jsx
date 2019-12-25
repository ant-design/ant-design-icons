// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';

export default {
  name: 'IconApiFilled',
  displayName: 'ApiFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ApiFilledSvg } },
      children,
    ),
};
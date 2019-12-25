// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';

export default {
  name: 'IconSmileFilled',
  displayName: 'SmileFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SmileFilledSvg } },
      children,
    ),
};
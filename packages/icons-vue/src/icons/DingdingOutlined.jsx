// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';

export default {
  name: 'IconDingdingOutlined',
  displayName: 'DingdingOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DingdingOutlinedSvg } },
      children,
    ),
};
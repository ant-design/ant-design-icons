// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';

export default {
  name: 'IconRightOutlined',
  displayName: 'RightOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightOutlinedSvg } },
      children,
    ),
};
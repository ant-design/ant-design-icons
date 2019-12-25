// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';

export default {
  name: 'IconTagOutlined',
  displayName: 'TagOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TagOutlinedSvg } },
      children,
    ),
};
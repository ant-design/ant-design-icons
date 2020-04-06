// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';

export default {
  name: 'IconTagsTwoTone',
  displayName: 'TagsTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TagsTwoToneSvg } },
      children,
    ),
};
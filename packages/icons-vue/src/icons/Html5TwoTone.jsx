// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone';

export default {
  name: 'IconHtml5TwoTone',
  displayName: 'Html5TwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: Html5TwoToneSvg } },
      children,
    ),
};
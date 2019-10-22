
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedEnvelopeOutlineSvg from '@ant-design/icons-svg/lib/outline/RedEnvelopeOutline';

export default {
  name: 'RedEnvelope',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedEnvelopeOutlineSvg } },
      children
    ),
};

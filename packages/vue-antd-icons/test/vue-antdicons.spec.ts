
import { Alibaba, CiCircleFill, library } from 'antd-icons';
import assert = require('assert');
// tslint:disable-next-line:no-var-requires
const Vue = require('vue');
// tslint:disable-next-line:no-var-requires
const VueAntdIcon = require('../lib');

library.add(Alibaba, CiCircleFill);

describe('Vue AntdIcon Component', () => {
  it('pass.', () => { // fix me.
    assert(VueAntdIcon);
  });
});

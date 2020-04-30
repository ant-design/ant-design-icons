import { mount } from '@vue/test-utils';
import Icon from '../src/components/Icon';
import createFromIconfontCN from '../src/components/IconFont';
import { setTwoToneColor, getTwoToneColor } from '../src/components/twoTonePrimaryColor';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
  ClockCircleOutlined,
} from '../src/icons';

describe('Icon', () => {
  it('should render to a <span class="xxx"><svg>...</svg></span>', () => {
    const wrapper = mount(HomeOutlined, { context: { class: 'my-icon-class' } });
    expect(wrapper).toMatchSnapshot();
  });

  it('should support basic usage', () => {
    const wrapper = mount({
      render() {
        return (
          <div>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SyncOutlined spin ccw/>
            <SyncOutlined ccw/>
            <LoadingOutlined />
            <LoadingOutlined ccw/>
          </div>
        );
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should support two-tone icon', () => {
    const wrapper = mount(CheckCircleTwoTone, { context: { props: { twoToneColor: '#f5222d' } } });
    expect(wrapper).toMatchSnapshot();
  });

  it('should support config global two-tone primary color', () => {
    setTwoToneColor('#1890ff');
    expect(getTwoToneColor()).toBe('#1890ff');
    const wrapper = mount(CheckCircleTwoTone);
    expect(wrapper).toMatchSnapshot();
  });

  it('should support pass svg paths as children', () => {
    const wrapper = mount({
      render() {
        return (
          <Icon viewBox="0 0 24 24">
            <title>Cool Home</title>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </Icon>
        );
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  // what's this?
  it('should give warning and render <i>{null}</i>', () => {
    const wrapper = mount(Icon, { context: { props: { viewBox: '0 0 24 24' } } });
    expect(wrapper).toMatchSnapshot();
  });

  it('should support custom usage of children', () => {
    expect(
      mount({
        render() {
          return <Icon>&E648</Icon>;
        },
      }),
    ).toMatchSnapshot();
  });

  it('support render svg as component', () => {
    const renderSvg = h => (
      <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" />
    );
    const SvgIcon = {
      functional: true,
      render() {
        return <Icon component={renderSvg} />;
      },
    };

    expect(mount(SvgIcon)).toMatchSnapshot();
  });

  describe('warning on conflicting theme', () => {
    let errorSpy;
    beforeEach(() => {
      errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      errorSpy.mockRestore();
    });

    it('does not warn', () => {
      mount(ClockCircleOutlined);
      expect(errorSpy).not.toHaveBeenCalled();
    });
  });

  describe('`component` prop', () => {
    it('can access to svg defs if has children', () => {
      const wrapper = mount({
        render() {
          return (
            <Icon
              class="my-home-icon"
              component={(h, svgProps) => (
                <svg {...svgProps}>
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="20%" stopColor="#39F" />
                      <stop offset="90%" stopColor="#F3F" />
                    </linearGradient>
                  </defs>
                  {svgProps.children}
                </svg>
              )}
            >
              <title>Cool Home</title>
              <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
            </Icon>
          );
        },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should support svg react component', () => {
    // children props would make no sense
    const SvgComponent = (h, props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    );

    const wrapper = mount({
      render() {
        return (
          <Icon class="my-home-icon" component={SvgComponent}>
            <title>Cool Home</title>
            <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
          </Icon>
        );
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Icon.createFromIconfontCN()', () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

  it('should support iconfont.cn', () => {
    const wrapper = mount({
      render() {
        return (
          <div class="icons-list">
            <IconFont type="icon-tuichu" />
            <IconFont type="icon-facebook" />
            <IconFont type="icon-twitter" />
          </div>
        );
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});

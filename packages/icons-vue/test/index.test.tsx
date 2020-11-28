import { mount } from '@vue/test-utils';
import Icon, {
  getTwoToneColor,
  setTwoToneColor,
  createFromIconfontCN,
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  CheckCircleTwoTone,
  ClockCircleOutlined,
} from '../lib';
describe('Icon', () => {
  it('should render to a <span class="xxx"><svg>...</svg></span>', () => {
    const wrapper = mount(HomeOutlined, { props: { class: 'my-icon-class' } });
    expect(wrapper.html()).toMatchSnapshot();
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
            <LoadingOutlined />
          </div>
        );
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should support kebab-case props', () => {
    const wrapper = mount({
      render() {
        return (
          <div>
            <CheckCircleTwoTone twoToneColor="#000" />
            <CheckCircleTwoTone two-tone-color="#000" />
          </div>
        );
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should support two-tone icon', () => {
    const wrapper = mount(CheckCircleTwoTone, { props: { twoToneColor: '#f5222d' } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should support config global two-tone primary color', () => {
    setTwoToneColor('#1890ff');
    expect(getTwoToneColor()).toBe('#1890ff');
    const wrapper = mount(CheckCircleTwoTone);
    expect(wrapper.html()).toMatchSnapshot();
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
    expect(wrapper.html()).toMatchSnapshot();
  });

  // what's this?
  it('should give warning and render <span>{null}</span>', () => {
    const wrapper = mount(Icon, { props: { viewBox: '0 0 24 24' } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should support custom usage of children', () => {
    expect(
      mount({
        render() {
          return <Icon>&E648</Icon>;
        },
      }).html(),
    ).toMatchSnapshot();
  });

  it('support render svg as component', () => {
    const renderSvg = () => (
      <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" />
    );
    const SvgIcon = () => {
      return <Icon component={renderSvg} />;
    };

    expect(mount(SvgIcon).html()).toMatchSnapshot();
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
              component={(svgProps, { slots }) => (
                <svg {...svgProps}>
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="20%" stop-color="#39F" />
                      <stop offset="90%" stop-color="#F3F" />
                    </linearGradient>
                  </defs>
                  {slots.default()}
                </svg>
              )}
            >
              <title>Cool Home</title>
              <path d="'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'" />
            </Icon>
          );
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it('should support svg react component', () => {
    // children props would make no sense
    const SvgComponent = props => (
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
    expect(wrapper.html()).toMatchSnapshot();
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
    expect(wrapper.html()).toMatchSnapshot();
  });
});

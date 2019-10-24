import Vue from "vue";
import * as AntdIcons from "../src/icons";

const SimpleDemo = {
  mounted() {
    console.log(AntdIcons);
  },
  render() {
    return null;
  }
};

new Vue({
  el: "#__vue-content>div",
  render() {
    return <SimpleDemo />;
  }
});

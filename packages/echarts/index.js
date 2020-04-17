import Echarts from './src/main';

/* istanbul ignore next */
Echarts.install = function(Vue) {
  Vue.component(Echarts.name, Echarts);
};

export default Echarts;

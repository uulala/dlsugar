import CardContainer from './src/main';

/* istanbul ignore next */
CardContainer.install = function(Vue) {
  Vue.component(CardContainer.name, CardContainer);
};

export default CardContainer;

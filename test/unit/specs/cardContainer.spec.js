import { createTest, destroyVM } from '../util';
import CardContainer from 'packages/cardContainer';

describe('CardContainer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CardContainer, true);
    expect(vm.$dl).to.exist;
  });
});


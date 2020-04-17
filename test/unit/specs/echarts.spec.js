import { createTest, destroyVM } from '../util';
import Echarts from 'packages/echarts';

describe('Echarts', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Echarts, true);
    expect(vm.$dl).to.exist;
  });
});


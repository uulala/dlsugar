import { createTest, destroyVM } from '../util';
import Menu from 'packages/menu';

describe('Menu', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Menu, true);
    expect(vm.$dl).to.exist;
  });
});


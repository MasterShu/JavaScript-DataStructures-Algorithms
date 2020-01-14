import test from 'ava'
import { KnapsackDynamic } from '../knapsackDynamic'

test('Create empty instance of KnapsackDynamic', t => {
  const knapsackDynamic = new KnapsackDynamic([], 0)
  t.snapshot(knapsackDynamic)
  t.pass()
})

test('Max loading', t => {
  const knapsackDynamic = new KnapsackDynamic([3, 5, 1, 2, 7], 16)
  const result = knapsackDynamic.getMaxWeight()
  t.is(result, 16)
})

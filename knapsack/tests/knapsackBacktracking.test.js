import test from 'ava'
import { KnapsackBacktracking } from '../knapsackBacktracking'

test('Create empty instance of KnapsackBacktracking.', t => {
  const knapsackBacktracking = new KnapsackBacktracking([], 0)
  t.snapshot(knapsackBacktracking)
  t.pass()
})

test('Counting max loading.', t => {
  const knapsackBacktracking = new KnapsackBacktracking([3, 5, 11, 7, 1], 21)
  knapsackBacktracking.getMaxWeight()
  t.is(knapsackBacktracking.result, 21)
})


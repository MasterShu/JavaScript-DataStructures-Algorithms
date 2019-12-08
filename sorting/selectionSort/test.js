import test from 'ava'
import { randArray } from '../../utils';

test('Test selection sort', t => {
  let testArr = randArray(1, 10000, 1000)
  let testArrLength = testArr.length
  t.assert(testArrLength, 1000)
})

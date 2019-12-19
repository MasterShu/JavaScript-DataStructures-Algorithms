import { LinkedList } from '../index'
import test from 'ava'
import { LinkedListNode } from '../LinkedList'

test('Create new linked list', t => {
  const linkedList = new LinkedList()
  t.snapshot(linkedList)
  t.pass()
})

test('Create new linked list node', t => {
  const linkedListNode = new LinkedListNode(9)
  t.snapshot(linkedListNode)
})

test('Build a new linked list', t => {
  const linkedList = new LinkedList()
  const testArr = [3, 5, 7, 9, 10, 13]
  linkedList.build(testArr)
  t.snapshot(linkedList)
  t.is(linkedList.count, testArr.length)
})

test('Append element to linked list', t => {
  const linkedList = new LinkedList()
  
  linkedList.append(3)
  const headElement = new LinkedListNode(3)
  t.deepEqual(linkedList.head, headElement)
  t.deepEqual(linkedList.tail, headElement)
  
  linkedList.append(5)
  linkedList.append(9)
  
  t.is(linkedList.tail.value, 9)
  t.notDeepEqual(linkedList.tail, headElement)
})

test('Delete linked list node by value', t => {
  const linkedList = new LinkedList()
  linkedList.build([3, 5, 1, 9, 7])
  linkedList.delete(1)
  t.is(linkedList.count, 4)
  let headElement = linkedList.head
  if(headElement.value === 1) {
    t.fail('Delete fail')
  }
  while(headElement.next) {
    if (headElement.next.value === 1) {
      t.fail('Delete fail')
    }
    headElement = headElement.next
  }
})

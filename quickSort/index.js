
// 选择排序
selectionSort = (arr) => {
    const n = arr.length
    for (let i = 0; i < n; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}


start = (arr) => {
    const ARR_LENGTH = arr.length    
    selectionSort(arr)
    for (let i = 0; i < ARR_LENGTH; i++) {
        console.log(arr[i])
    }
}

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const b = [1.5, 3.4, 3.9, 1.4, 6.5, 66.2, 9.3]
const c = ['a', 'c', 'z', 'm', 't', 'y']

start(c)

# 算法

```bash
├── bubble sort 冒泡排序
├── heap 堆结构
├── heap sort 堆排序
├── insertion sort 插入排序
├── merge sort 归并排序
├── quick sort 快速排序排序
├── selection sort 选择排序
├── utils 工具
│   ├── index.js  模型类文件
│   ├── sortTestHelp.js 测试排序
```

## bubble sort

> 冒泡排序
冒泡排序总的平均时间复杂度为 

```math
O(N^2)
```

但是在有序的情况下, 就可以达到 
```math
O(N)
```

## selection sort

> 快速排序

## insertion sort

> 稳定排序

## merge sort

> 归并排序
> 稳定排序

使用 二分法查分排序, 然后逐步归并, 然而在归并过程中, 就需要临时空间来做归并处理.

## quick sort

> 快速排序法
> 非稳定排序

在大量重复值的情况下, 性能堪忧? 不过普通情况下, 效率优于归并排序.

### 三路快速排序

当存在大量重复值的情况下, 三路快速排序可以提高排序速度, 并且在普通情况下, 拥有不错的效率.

## heap sort

> 堆排序
> 非稳定排序

这个并不是效率高的排序法, 但是特定的场景使用却是极好的.

### Index Max Heap

> 最大索引堆

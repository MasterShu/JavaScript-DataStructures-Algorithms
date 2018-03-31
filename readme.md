# 算法

```bash
├── selection sort 选择排序
├── insertion sort 插入排序
├── merge sort 归并排序
├── merge sort 归并排序
│   ├── model.js  模型类文件
│   ├── server.js 服务端代码
│   ├── user.js   服务端用户代码
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

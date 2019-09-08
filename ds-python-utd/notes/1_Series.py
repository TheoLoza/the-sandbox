# built on top numpy array
# series can have access levels/indexed by labels
# series hold different object types
import numpy as np
import pandas as pd
labels = ['a', 'b', 'c']  # list object
my_data = [10, 20, 30]  # list object
arr = np.array(my_data)
# print(arr)
d = {'a': 10, 'b': 20, 'c': 30}  # dictionary
# print(d)

print(pd.Series(data=my_data))
#print(pd.Series(data=my_data, index=labels))
#print(pd.Series(my_data, labels))
#print(pd.Series(arr, labels))
# print(pd.Series(d))
# print(pd.Series(data=labels))
#print(pd.Series([sum, print, len]))

ser1 = pd.Series([1, 2, 3, 4], ['USA', 'Germany', 'USSR', 'India'])
print(ser1)
ser2 = pd.Series([1, 2, 5, 4], ['USA', 'Germany', 'Italy', 'India'])
print(ser2)

print(ser1['USA'])
print(ser1+ser2)
# Ref: www.pieriandata.com

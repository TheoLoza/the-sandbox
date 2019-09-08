import numpy as np
import pandas as pd
from numpy.random import randn

np.random.seed(101)
df = pd.DataFrame(randn(5, 4), ['A', 'B', 'C', 'D', 'E'], ['W', 'X', 'Y', 'Z'])
# print(df)
#print(df > 0)
#print(df[df > 0])
#print(df['W'] > 0)
# print(df)
resultdf = df[df['Z'] < 0]
# print(resultdf)
#resultdf = df[df['Z'] < 0]['X']
print(resultdf)
resultdf = df[df['Z'] < 0][['X', 'Y']]
# print(resultdf)
# print(df)
boolser = df['W'] > 0
result = df[boolser]
# print(result)
#print(result[['Y', 'X']])
# df[(df['W'] > 0) and (df['Y'] > 1)] # series of bool values
# print(df)
#print(df[(df['W'] > 0) & (df['Y'] > 1)])
#df1 = df.reset_index()
# print(df1)
# df.reset_index(inplace=True)
# print(df)
newind = 'CA NY WY OR CO'.split()
# print(newind)
# print(df)
df['States'] = newind
# print(df)
# df.set_index('States')
# print(df)
df.set_index('States', inplace=True)
# print(df)
#Ref: www.pieriandata.com

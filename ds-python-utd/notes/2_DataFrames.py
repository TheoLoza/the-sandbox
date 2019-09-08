import numpy as np
import pandas as pd
from numpy.random import randn
#print(randn(5, 4))
#print('A B C D E'.split())
# np.random.seed(101)
df = pd.DataFrame(randn(5, 4), ['A', 'B', 'C', 'D', 'E'], ['W', 'X', 'Y', 'Z'])
# print(df)
# print(df['W'])
# print(type(df['W']))
#print(df[['W', 'Z']])
# print(df)
df['new'] = df['W'] + df['Z']
# print(df['new'])
# print(df)
# df.drop('new')
#df.drop('new', axis=1)
#df2 = df.drop('new', axis=1)
# print(df2)
# print(df)
#df.drop('new', axis=1, inplace=True)
print(df)
# print(df.shape)
print(df.loc['A'])
print(df.iloc[0])
print(df.loc['B', 'Y'])
print(df.loc[:, 'Y'])
df.loc[['A', 'B'], ['W', 'Y']]
#Ref: www.pieriandata.com

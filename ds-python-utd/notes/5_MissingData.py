import numpy as np
import pandas as pd
d = {'A': [1, 2, np.nan], 'B': [5, np.nan, np.nan], 'C': [1, 2, 3]}
print(d)
df = pd.DataFrame(d)
print(df)
df.dropna()
print(df)
print(df.dropna(axis=1))
print(df)
# print(df.dropna(thresh=0))
# print(df)
# print(df.fillna(value='FILL'))
# print(df['A'].fillna(value=df['A'].mean()))
#Ref: www.pieriandata.com

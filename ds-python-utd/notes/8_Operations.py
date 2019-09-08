import numpy as np
import pandas as px

df = px.DataFrame({'col1': [1, 2, 3, 4],
                   'col2': [444, 555, 666, 444],
                   'col3': 'abc def ghi xyz'.split()})
print(df.head())
print(df['col2'].unique())
print(df['col2'].value_counts())
#print(df[(df['col1'] > 2) & (df['col2'] == 444)])

# apply method


def times2(x):
    return x*2


# print(df['col1'].sum())
# print(df['col1'].apply(times2))
# print(df['col3'])
# print(df['col3'].apply(len))
#print(df['col2'].apply(lambda x: x*2))

# print(df.drop('col1', axis=1))  # in place
# print(df.columns)
# print(df.index)

# print(df.sort_values('col2'))  # by not required
# print(df.isnull())

data = {'A': 'foo foo foo bar bar bar'.split(),
        'B': 'one one two two one one'.split(),
        'C': 'x y x y x y'.split(),
        'D': [1, 3, 2, 5, 4, 1]}
# print(data)

df = px.DataFrame(data)
# print(df)
#print(df.pivot_table(values='D', index=['A', 'B'], columns=['C']))
#Ref: www.pieriandata.com

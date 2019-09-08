import pandas as px

df1 = px.DataFrame({'A': 'A0 A1 A2 A3'.split(),
                    'B': 'B0 B1 B2 B3'.split(),
                    'C': 'C0 C1 C2 C3'.split(),
                    'D': 'D0 D1 D2 D3'.split()},
                   index=[0, 1, 2, 3]
                   )

df2 = px.DataFrame({'A': 'A4 A5 A6 A7'.split(),
                    'B': 'B4 B5 B6 B7'.split(),
                    'C': 'C4 C5 C6 C7'.split(),
                    'D': 'D4 D5 D6 D7'.split()},
                   index=[4, 5, 6, 7]
                   )

df3 = px.DataFrame({'A': 'A8 A9 A10 A11'.split(),
                    'B': 'B8 B9 B10 B11'.split(),
                    'C': 'C8 C9 C10 C11'.split(),
                    'D': 'D8 D9 D10 D11'.split()},
                   index=[8, 9, 10, 11]
                   )
# print(df1)
# print(df2)
# print(df3)
df4 = px.concat([df1, df2, df3])
# print(df4)
df5 = px.concat([df1, df2, df3], axis=1)
# print(df5)

leftdf = px.DataFrame({'key': 'K0 K1 K2 K3'.split(),
                       'A': 'A0 A1 A2 A3'.split(),
                       'B': 'B0 B1 B2 B3'.split()})

rightdf = px.DataFrame({'key': 'K0 K1 K2 K3'.split(),
                        'C': 'C0 C1 C2 C3'.split(),
                        'D': 'D0 D1 D2 D3'.split()})

# print(leftdf)
# print(rightdf)

dfmerge = px.merge(leftdf, rightdf, on='key')
# print(dfmerge)

leftdf = px.DataFrame({'key1': 'K0 K0 K1 K2'.split(),
                       'key2': 'K0 K1 K0 K1'.split(),
                       'A': 'A0 A1 A2 A3'.split(),
                       'B': 'B0 B1 B2 B3'.split()})

rightdf = px.DataFrame({'key1': 'K0 K1 K1 K2'.split(),
                        'key2': 'K0 K0 K0 K0'.split(),
                        'C': 'C0 C1 C2 C3'.split(),
                        'D': 'D0 D1 D2 D3'.split()})

dfmerge = px.merge(leftdf, rightdf, on=['key1', 'key2'])
# print(leftdf)
# print(rightdf)
#print(dfmerge)

##dfmerge = px.merge(leftdf, rightdf, how = 'outer', on=['key1', 'key2'])
##dfmerge = px.merge(leftdf, rightdf, how = 'right', on=['key1', 'key2'])

leftdf = px.DataFrame({'A': 'A0 A1 A2'.split(),
                       'B': 'B0 B1 B2'.split()},
                      index=['K0', 'K1', 'K2'])

rightdf = px.DataFrame({'C': 'C0 C2 C3'.split(),
                        'D': 'D0 D2 D3'.split()},
                       index=['K0', 'K2', 'K3'])

# print(leftdf)
# print(rightdf)
# print(leftdf.join(rightdf))
#print(leftdf.join(rightdf, how='outer'))
#Ref: www.pieriandata.com

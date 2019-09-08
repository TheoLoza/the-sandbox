import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
plt.style.use('ggplot')
plt.style.use('bmh')
df1 = pd.read_csv('df1', index_col=0)
df2 = pd.read_csv('df2')
df1['A'].hist()
plt.show()
#Ref: www.pieriandata.com

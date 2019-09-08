import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
tips = sns.load_dataset('tips')
df = pd.DataFrame(tips)
# print(df)
df2 = df[df['day'] == 'Thur']
# print(df2)
#df2.to_csv('Tips_Thurs.csv', index=False)
# group by action
# aggregate categorical data by some function default mean
# estimator: aggregate function
#sns.barplot(x='sex', y='total_bill', data=tips)
# plt.show()
#sns.barplot(x='sex', y='total_bill', data=tips, estimator=np.std)
# plt.show()
# y-axis is already chosen for us
#sns.countplot(x='sex', data=tips)
# plt.show()
#sns.countplot(x='sex', data=tips, hue='smoker')
# plt.show()
sns.boxplot(x="day", y="total_bill", data=tips, palette='rainbow')
plt.show()

#sns.boxplot(x="day", y="total_bill", hue="smoker", data=tips, palette="coolwarm")
# plt.show()

#sns.violinplot(x="day", y="total_bill", data=tips, palette='rainbow')
# plt.show()
#Ref: www.pieriandata.com

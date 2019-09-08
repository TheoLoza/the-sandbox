import seaborn as sns
import matplotlib.pyplot as plt
tips = sns.load_dataset('tips')
# linear model plot
sns.lmplot(x='total_bill', y='tip', data=tips)
#sns.lmplot(x='total_bill', y='tip', data=tips, hue='sex')
plt.show()
#sns.lmplot(x='total_bill', y='tip', data=tips, hue='sex', palette='coolwarm')
#sns.lmplot(x='total_bill', y='tip', data=tips, col='sex')
#sns.lmplot(x="total_bill", y="tip", row="sex", col="time", data=tips)
#Ref: www.pieriandata.com

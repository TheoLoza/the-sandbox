import seaborn as sns
import matplotlib.pyplot as plt
flights = sns.load_dataset('flights')
tips = sns.load_dataset('tips')
#flights.to_csv('Flights.csv', index=False)
# print(flights.head())
# print(tips.corr())
# sns.heatmap(tips.corr())
# plt.show()
#sns.heatmap(tips.corr(), annot=True)
# plt.show()

#sns.heatmap(tips.corr(), cmap='coolwarm', annot=True)
# plt.show()

# convert into matrix form
flights.pivot_table(values='passengers', index='month', columns='year')
pvflights = flights.pivot_table(values='passengers', index='month', columns='year')
# sns.heatmap(pvflights)
# plt.show()
sns.heatmap(pvflights, cmap='magma', linecolor='white', linewidths=1)
plt.show()
#Ref: www.pieriandata.com

# https://seaborn.pydata.org/
import matplotlib.pyplot as plt
import seaborn as sns
tips = sns.load_dataset('tips')
iris = sns.load_dataset('iris')
print(iris.head())
print(tips.head())
#tips.to_csv('tips.csv', index=False)
"""
The distplot shows the distribution of a univariate set of observations.
"""
# sns.distplot(tips['total_bill'])
# plt.show()

#sns.distplot(tips['total_bill'], kde=False, bins=30)
# plt.show()

"""
    jointplot() allows you to basically match up two distplots for bivariate data.
    With your choice of what kind parameter to compare with:
    kind: "scatter", "reg", "resid", "kde",  "hex"
"""
#sns.jointplot(x='total_bill', y='tip', data=tips, kind='scatter')
#sns.jointplot(x='tip', y='total_bill', data=tips, kind='scatter')
#sns.jointplot(x='total_bill', y='tip', data=tips, kind='reg')
# plt.show()

"""
    pairplot will plot pairwise relationships across an entire dataframe
    (for the numerical columns) and supports a color hue argument
    (for categorical columns). will do joinplot for every possible combination.
"""
# sns.pairplot(tips)
#sns.pairplot(tips, hue='sex')
# plt.show()
#sns.pairplot(tips, hue='sex', palette='coolwarm')
# plt.show()

# sns.pairplot(iris)
#sns.pairplot(iris, hue='species')
#sns.pairplot(iris, hue='species', palette='husl')
#sns.pairplot(iris, hue='species', palette='RdBu')
# circle, Diamond, square
sns.pairplot(iris, hue='species', palette='husl', markers=['o', 'D', 's'])
# sns.pairplot(iris, hue='species', palette='husl', markers=[
#             'o', 'D', 's'], vars=['sepal_length', 'sepal_width'])
# sns.pairplot(tips)
#sns.pairplot(tips, hue='total_bill')
#sns.pairplot(tips, palette='husl', vars=['total_bill', 'tip'])
plt.show()

"""
    rugplots are actually a very simple concept, they just draw a dash mark
    for every point on a univariate distribution. They are the building block
    of a KDE plot.
"""
# sns.rugplot(tips['total_bill'])
# plt.show()
#Ref: www.pieriandata.com

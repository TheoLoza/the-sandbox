"""
Plotting Library for Python
Similar feel to MatLab's graphical Plotting
conda Install matplotlib
Visit matplotlib.org
important link is gallery
"""
import matplotlib.pyplot as plt
import numpy as np
x = np.linspace(0, 5, 11)
y = x ** 2
print(x)
print(y)
# FUNCTIONAL method
#plt.plot(x, y)
# plt.show()

#plt.xlabel('X Label')
#plt.ylabel('Y Label')
# plt.title('Title')
# plt.show()

# Multiplot
plt.subplot(1, 2, 1)  # rows, columns, plot #
plt.plot(x, y, 'r')
# plt.show()

plt.subplot(1, 2, 2)
plt.plot(y, x, 'b')
plt.show()
#Ref: www.pieriandata.com

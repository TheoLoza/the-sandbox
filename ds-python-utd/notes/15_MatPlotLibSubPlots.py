import matplotlib.pyplot as plt
import numpy as np
# Use similar to plt.figure() except use tuple unpacking to grab fig and axes
fig, axes = plt.subplots()
x = np.linspace(0, 5, 11)
y = x ** 2
# Now use the axes object to add stuff to plot
axes.plot(x, y, 'r')
axes.set_xlabel('x')
axes.set_ylabel('y')
axes.set_title('title')
# Empty canvas of 1 by 2 subplots
fig, axes = plt.subplots(nrows=1, ncols=2)
fig, axes = plt.subplots(nrows=3, ncols=3)
# Axes is an array of axes to plot on
axes
for ax in axes:
    ax.plot(x, y, 'b')
    ax.set_xlabel('x')
    ax.set_ylabel('y')
    ax.set_title('title')
axes[0].plot(x, y)
axes[0].set_title('First Plot')
axes[1].plot(y, x)
# Display the figure object
fig
#fig, axes = plt.subplots(nrows=1, ncols=2)
"""
for ax in axes:
    ax.plot(x, y, 'g')
    ax.set_xlabel('x')
    ax.set_ylabel('y')
    ax.set_title('title')
"""
# fig
# plt.tight_layout()  # prevent overlapping
# width and height
# fig = plt.figure(figsize=(8, 4), dpi=100)  # pixels per inch
#fig, axes = plt.subplots(figsize=(12, 3))
# fig, axes = plt.subplots(nrows=2, ncols=1, figsize=(12, 3))

#axes.plot(x, y, 'r')
# axes.set_xlabel('x')
# axes.set_ylabel('y')
# axes.set_title('title')
# fig.savefig("filename.png")
#fig.savefig("filename.png", dpi=200)
# ax.set_title("title")
# ax.set_xlabel("x")
# ax.set_ylabel("y")
#fig = plt.figure()

#ax = fig.add_axes([0, 0, 1, 1])

#ax.plot(x, x**2, label="x**2")
#ax.plot(x, x**3, label="x**3")
# ax.legend()
#Ref: www.pieriandata.com

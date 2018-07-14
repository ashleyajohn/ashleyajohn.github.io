---
layout: post
title: "City Clustering: Finding Similarities Across the World"
date: 2018-06-30
---

I’ve been getting the itch to travel and to work on some unsupervised learning, so here we are! For this analysis, I was interested in the unsupervised clustering of cities. The interest was in seeing if there were similarities between cities that, on the surface, might not seem so similar. 
To do this analysis, I used data that summarized major aspects of city life. I used a data set from Kaggle that used statistics from the website Movehub. The dataset contains information for about 200 cities, and contains the following fields: 
* Cost of living variables, capturing the cost of everyday items such as coffee, wine, movies, gas, rent, and income 
* Quality of life variables, capturing necessities of life and about the community including purchase power, healthcare, pollution, quality of life, and crime rating
Movehub itself gathers data from other sources to create these ratings, which it transforms into aggregates for their site. Though there aren’t many features included in the dataset, the features seem to have a bit of overlap. For example, the cost of rent vs. the income is likely related. To take a closer look, I plotted the correlation of each of the variables against each other in a heat map. 

![correlation]({{ "/assets/corr.png" | absolute_url }})

As expected, pairs like Disposable Income and Purchasing power were highly correlated. Since we don’t want correlated data in the mix skewing the clustering, dimensionality reduction was implemented in the form of PCA, Principle Component Analysis. PCA chooses which dimensions to keep by making projections of variables onto a hyperplane. It then chooses the axis that retains the maximum amount of variance to retain the most information possible.
Knowing that I was interested in doing visualization, I decided to use PCA to reduce the dataset down to two dimensions for ease of plotting. 
With the data reduced, the next step was to get working on the actual clustering! First, I needed to think about how many clusters to separate the data into. Since this project was unsupervised, meaning that the data does not have any ground truth labels, there is no one true right answer for the number of clusters it should have. To experiment, I used k-Means clustering and tried out n=2-30 number of clusters. I recorded the error for each of them and then made and elbow plot to see where the largest decrease occurred. 

![elbow plot]({{ "/assets/elbow.png" | absolute_url }})

The biggest decrease appears to occur between n=5 and n=15, so I zoomed in on that window. 

Next, I was interested in seeing how different clustering algorithms grouped the data. First, I stuck with the familiar k-means clustering. K-means clustering iteratively to assigns each data point to one of K groups based on the features that are provided. The iterations of the clusters change as the centroids of the clusters are optimized such that the distance between each datapoint and its assigned centroid is minimized. In this case, since I had no background knowledge of the data, I let scikitlearn randomly initialize the centroids. As shown in the gif below (anchored by American cities, for some context), the clustering can change a lot depending on how many clusters there are.  

![k means]({{ "/assets/kmeans.gif" | absolute_url }})

Next, I wanted to explore hierarchical clustering. Hierarchical clustering involves creating clusters that have a predetermined ordering from top to bottom. Meaning that groups are made iteratively, like k-means but it is a greedy algorithm. Where k-means will find a local optimum, which can be sensitive to initialization point, hierarchical clustering seeks the optimal cluster at each of its decision points. For this analysis, I looked at agglomerative clustering which is a bottom up approach. Agglomerative clustering starts by treating each data point as its own self-contained cluster, finds similarities between groups, and then works its way up to larger clusters. 

Agglomerative clustering has a few more parameters to experiment with, two of which I explored: linkage and affinity. Linkage determines the distance between sets of observations as a function of the pairwise distances between observations. Per scikit learn documentation: 
* Average linkage (left) minimizes the average of the distances between all observations of pairs of clusters.
As seen in the gif below, there are clear differences between the clusters within the same n_clusters and between them. 
* Maximum or complete (center) linkage minimizes the maximum distance between observations of pairs of clusters.
* Ward (right) minimizes the sum of squared differences within all clusters. It is a variance-minimizing approach and in this sense is like the k-means objective function but tackled with an agglomerative hierarchical approach.

![linkage]({{ "/assets/linkage.gif" | absolute_url }})

Affinity is the way that the distance between points is calculated, shown from left to right: 
* Euclidean
* L1
* L2
* Manhattan
* Cosine

Ward linkage only allows for Euclidean distance, so the affinity was only toggled here for complete and average linkage. Like the linkage, the distance measure has a true effect on the shape and size of the clusters. 

![linkage]({{ "/assets/affinity.gif" | absolute_url }})

Finally, I was interested to see how these clusters matched intuition about different cities in the world. I looked at developing countries vs. developed countries according to economic indicators. I look at cluster nuber n=7 as a fair middle ground for the sake of comparison. As it tirns out though, the cluster pretty much makes itself! There is a clear difference between the two, as all the developed countries are grouped on the left and all the developing countries on the right. Though it is not possible to say exactly what variable is driving the difference since the features have been reduced via PCA, the daily life of citizens is still different between the two groups of countries even as their economies are beginning to converge. 

![developed-emerging]({{ "/assets/dev-emerg.gif" | absolute_url }})

There is much more that could be done to improve this analysis including getting more cities and more granular data. However, this was an easy, colorful and fun analysis to learn about the similarities between cities around the world. I’ll hopefully be planning my next trip to a city unlike mine! 

[Code for this project can be found on my Github.](https://github.com/ashleyajohn/city-cluster)

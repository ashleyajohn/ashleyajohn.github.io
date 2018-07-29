---
layout: post
title: 'Networks of Migration in the United States (Part 2)'
jsarr:
- graphs/randomnetwork.js
---
In [Part 1 of this analysis](https://ashleyajohn.github.io/2018/07/28/networks-part-1.html) I began using migration data from the US Census about movement between metropolitan areas in the United States. 

First, I was curious to know which cities were attracted the most and the fewest new residents. To do this, I had to clean the data a little bit. First I had to get rid of dupliate rows. Even though the data set was mostly clean, some rows were dupliates because they contained data on the same path. For example, there would be a row for migration between Dallas and Austin and a separate row for migration between Austin and Dallas. The information in these rows were exactly the same exect the origin and destination cities were swapped. To account for this, I created a key called "check_string" and then removed duplicate rows based on this field. 

After this was cleaned, I grouped by the origin city and summed the net migration for each of the unique areas. Since there were over 300 cities in the data set, I was more interested in the cities who had the largest and smallest migrations. I plotted the Top 10 and Bottom 10 areas based on the net migration: 

![nettop10]({{ "/assets/netTop10.png" | absolute_url }})
![netbottom10]({{ "/assets/netBottom10.png" | absolute_url }})

The winners in the largest net positive migration were all smaller cities, known to be on the rise such as Austin, Houstin, Phoenix, and Charlotte. On the flip side, the nation's largest cities like New York, LA, Chicago, and DC all has a top 10 negative net migration. Part of this is likely due to the transient nature of residents in the nation's largest cities. Many people move to these areas knowing that is not where they will live long term. However, it is interesting that smaller cities showed such steady positive growth that the largest areas were not even remotely close to offsetting their losses. 

Next I was intereted in the paths that see the largest net positive and negative migrations. Specifically, this looks at the precise origin and destination cities on either end. In these two plots, the y axis is the path of migration shown as "Origin - Destination":

![pathTop10]({{ "/assets/pathTop10.png" | absolute_url }})

In this case, a net positive migration means that the origin city gained more residents than it lost. For example, Miami won out with the highest net positive residents coming into the city from New York. As expected, cities who had some of the highest net negative migrations like New York and LA contributed to some of the largest migration paths. Nine out of ten of the top migration paths were related to one of the cities with the lowest net migration.  

Finally I was interested in how the fastest growing cities moved between each other. To explore this, I expanded by table and looked at the top 50 cities with the largest net positive migration. To get an overall idea of what these patterns were like, I made a heatmap to look at the scaled net migration between these cities. The net migrations were scaled to a mean of zero, so anything positive meant that the origin city "won" and the reverse for negative. 

![heatmap]({{ "/assets/top50Heatmap.png" | absolute_url }})

Overall, the top 50 cities are fairly equal in how they interact with each other, all hovering around that zero mean. The huge outliers are notable between geographically and economically close regions. The migrations suggest patterns of residents moving to nearby metropolitan/academic areas. For example, movements between: Atlantas and Athenes (home of UGA), Dallas and Austin (home of UT), and Houston and College Station (home of Texas A&M). 

To get an even more macro point of view, I used [vis.js]() again to get a big picture of the movement between these cities. Click and drag nodes to play around with the edges and get a better view! This package has awesome, interative animations. 
<br>
<div id="mynetwork" style="height: 1000px; width:1000px"></div>
<br>
Each of the edges in the network is weighted by the scaled net movement between the two cities. The thicker the line between two cities - the larger the net migration. The nodes are also colored by geographic region to get an idea about which areas in the country are seeing the largest influx. The colors are as follows: 

* North/Northeast - Green 
* South/Southeast - Orange
* Central - Purple
* West - Blue

The resounding  result that the East is not seeing much net positive movement. Only five of the top 50 come from the East and even of those, none of them are traditional, trendy metropolitan areas (see State College, PA and Richmond, VA). Central is not far behind with just six, and the remaining come from the South and the West. What is interesting about seeing migration at this network scale is that it allows the geographic relationships to come through again. For example, click on the Austin node and drag it out and you'll see that it is entirely orange (unintentionally made it Longhorn burnt orange colored). College Station and Athenes are more of the same. However, some cities are a bit more diverse like Las Vegas and Seattle. 

All of this is to say that migration in the United States is a fascinating study, especially as more Americans look to move more often for jobs and family. I'm looking forward to the next update of census data to see how these results change!


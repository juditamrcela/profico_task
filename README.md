#Code description 

A frontend was created for the needs of the news channel. React library with scss was used for creation. When creating the design, bootstrap was used a bit, as well as antdesign and mix of libraries for icons. I mostly custom made classes so that the final product would be as close as possible to the target. To create the bookmark feature, the bootstrap icon "bookmark" located in the lower right corner was used. And the marked articles are under the favorites category, which is marked with the "heart" icon. When selecting the desired article, the appearance of the bookmark icon changes from empty to full, and thus the article is added to the "Favorites" category, and by pressing the icon again, the icon takes on the empty initial appearance and thus the icon is moved from the "Favorites" category. Why exactly? I was guided so that the already known feature would be consistent, so that it would not be too different from the way it is implemented in similar applications. The "bookmark" icon is known to clients thus, using the bookmark feature in this application becomes intuitive, because the client encounters something that is already familiar to him.

#Features that were not implemented and why: 

Some features were not implemented because I could not find the right way to solve the issuse. First of features which was not implement is button and icon inside the search input. I tried using prefix and sufix with few different libraries for input design, and then some custom input. But the main purpose of search input still works, just the function is a bit different. Insted of search on clicked button, user must write wanted search word and then dynamically content changes as the user writes inside the search input. Next feature that I did not implement is active link on sidebar changes when user clicks on another category. So, whenever user click different category, home category keeps active link design. Problem comes from different version of react-router-dom, in which there is no "exact" param. so the home route stays active all the time. Next feature I did not implement is news box fitting just right inside news component. I tried using different techniques for it to fit, such as bootstrap grid, antdesign grid, and lastly I tried making custom grid but it did not fit just right.

Other required functionalites I did implement by bearing in mind desing pattern and principles and responsive design, while keeping code clean as possible.

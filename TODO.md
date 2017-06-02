ZEF Assignment
---------------

You should have been tasked by ZEF to do either the 1) Coding Assignment *OR* 2) Design Assignment *OR* 3) Advanced Assignment so there is no need to make all!

### 1) Coding Assignment

Make an application that implements the functionality of the given design. You can implement the UI with material components that resembles the components in the design, i.e. the visual appearance does not need to match the design just the functionality and general layout. For the interaction parts that are not clearly visible in the design use your own imagination about how the checkout process should work. We don't expect fully implemented application only the basic functionality that forms the basic checkout process visible in the design, but its up to you how far you take the assignment.

##### Design for the app:

  https://projects.invisionapp.com/d/main#/projects/prototypes/10303166

  You should have invitation in your email to set up a free account to invision.

##### Steps to get started:

  - Create a new local branch for your work.

    You can do commits to your branch as you wish, but only push your final version before the given deadline.

  - Setup your development environment by running: npm install

    After that you should be able to get live preview with: npm start

  - Setup your code editor to use stylelint and tslint plugins.

  - Implement the app into app.component.html and app.component.scss.

    You can naturally generate more components and even use the router, but one component implementation is enough.

  - For the layout use the attributes provided by flex-layout library (fxLayout, fxFlex etc.).

    You can use the breakpoints provided by the library (xs,sm,lg,...) instead of the breakpoints mentioned in the designs.

    More info about the flex-layout library and its usage:

    https://github.com/angular/flex-layout

  - Use material library components always when possible instead of pure HTML elements (input, button).

    More info about the material library components and their usage:

    https://material.angular.io/

  - The application does not need to look exactly like the design, but it should have similar concept / layout / elements and provide the functionality of the checkout process. You can use the ngIf and click events to change between views if such things are needed (example provided in the code) or if you are more familiar with angular 2 project then you can use even the router and separate components for separate views etc.

  - Try to follow the coding guidelines and best practices that are mentioned in the README file. If you have setup your code editor correctly it should use the tslint.json and stylelint.json configuration file and provide
    coding style errors etc. for you.

### 2) Design Assignment

Make an application that replicates the given design visually as closely as possible. For margins / paddings / etc. that are not defined in the design you can use your own estimation. Try to make the styles generic, i.e. don't style each element individually, instead style each widget / element with using generic classes. Use variables for max width and other layout related sizes for easy changing (Only the main layout parts, don't make everything like all the paddings and margins as variables).

##### Design to replicate:

  https://projects.invisionapp.com/d/main#/projects/prototypes/10303166

  You should have invitation in your email to set up a free account to invision.

##### Steps to get started:

  - Create a new local branch for your work.

    You can do commits to your branch as you wish, but only push your final version before the given deadline.

  - Setup your development environment by running: npm install

    After that you should be able to get live preview with: npm start

  - Setup your code editor to use stylelint and tslint plugins.

  - Implement the design into app.component.html and app.component.scss.

    You can naturally generate more components and use the typescript files as well, but one component implementation is enough.

  - For the layout use the attributes provided by flex-layout library (fxLayout, fxFlex etc.).

    You can use the breakpoints provided by the library (xs,sm,lg,...) instead of the breakpoints mentioned in the designs.

    More info about the flex-layout library and its usage:

    https://github.com/angular/flex-layout

  - Use material library components always when possible instead of pure HTML elements (input, button).

    More info about the material components and their usage:

    https://material.angular.io/

  - The application does not need to have any real functionality, i.e. the plain UI implementation is enough. You can use the ngIf and click events to change between views if such things are needed (example provided in the code). Or if you are more familiar with angular 2 project then you can use even the router and separate components for separate views etc.

  - Try to follow the coding guidelines and best practices that are mentioned in the README file. If you have setup your code editor correctly it should use the tslint.json and stylelint.json configuration file and provide coding style errors etc. for you.

### 3) Advanced Assignment

Make an application that implements the functionality of the given design. You can implement the UI with material components that resembles the components in the design, i.e. the visual appearance does not need to match the design just the functionality and general layout. For the interaction parts that are not clearly visible in the design use your own imagination about how the checkout process should work. We don't expect fully implemented application only the basic functionality that forms the basic checkout process visible in the design, but its up to you how far you take the assignment.

##### Design for the app:

  Check the design-1.png, design-2.png and design-3.png images in the root of this repository.

##### Minimum requirements:

  The data format needs to be as in the example data provided in the data.json file which is also in the root of this repository.

  The left side panel needs to be controlled by the router url / tabs (Only the build tab needs to have content, others can be empty).

  The right side edit area needs to be the same for all the tabs (So route only changes the left panel content and the right side stays as it is).

  Questions on the right needs to be swipeable/scrollable with possibility to edit the question title (You need to use ngx-swiper-wrapper library for the right view).

  Question can be selected either from the left panel or from the right Swiper area, and both the panel and Swiper needs to reflect the active question (i.e. the question in the view on the right).

  The selected question key needs to be as route parameter so that the active question will stay active on page reload or when link is copied and opened in another browser tab.

  The last card of each group needs to be add question to group card and the very last card of the right view needs to be add question card.

##### Optional functionality:

  Add re-arranging of the questions in the left panel with DND (You can use ng2-dragula library or some other library of your choice).

  Add adding of questions in between of the questions in a way that if user hovers mouse for a 200ms in between the question an add question item would appear.

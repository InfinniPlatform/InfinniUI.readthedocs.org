Builders
========

InfinniUI builders interprete metadata transmitted to them creating and setting up elements and data sources, as well as, binding them.

There are single type element builders (ie only for buttons or for aprticular data sources). All of them must be registered in main builder which may recieve data from each element and interprete them.

Single type element builders requirements
-----------------------------------------

Only one requirement exists for single type element builders that is implementation of method ``build(context, args)``.

``Context`` must recieve  `View context <../Context>`__ in which the builder is invoked by. ``Args`` recieves parameters for elements creation, always accompanied by ``args.metadata`` and  parent element``args.parent``.

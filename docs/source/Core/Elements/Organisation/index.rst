Organazing elements
=====================

Every element comprises of a few parts each one has its own functions.

-  Element builder
-  Element
-  Control
-  Control model
-  View control

Element builder
---------------

Javascript-object which creates and sets up element accordingly to metadata transmitted to builder.

Element
-------

Javascript-object representing certain visual element. This Javascript-object has got all required API for the current element. Thus practically this element is a facade for some control which can be derived from a third party library not compliant with required API however compliant to the requirements of the visual element.

Control
-------

Control is a Javascript-object specifically representing a visual element. At the moment, InfinniUI uses elements coded with Backbone library. Each element comprises of a Backbone-model and Backbone-view, control is the link between those.

Control model
---------------

Backbone-model of a specific control.

Control view
----------------------

Backbone-view of a specific control.

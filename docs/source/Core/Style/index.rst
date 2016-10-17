Style
=====

InfinniUI is based on bootstrap 3 framework. Styling of an app
made with  InfinniUI can be produced in 4 levels.

1. Level of choosing from pre-defined values.
2. Level of settings of pre-defined platform values.
3. Level of bootstrap variable settings.
4. Manual styling of css for certain app elements.

As the number of level increases the more customization can be done to the app. However every next level implies the more low-level work needs to be done to stay aligned with the principles built-in InfinniUI. Going to lower levels will require more programmers skills and knowledge.

Pre-defined values level
-------------------------------------------

Can be set up in metadata. This setting `colors of
elements <ColorStyle>`__ as well as `typography inside elements <TextStyle>`__.

.. code:: js

    {
        "DataSources": [
        ],

        "Items": [{
            "Label": {
                "Value": "Label text",
                "Background": "primary1",
                "Foreground": "accent1",
                "TextStyle": "Display1"
            }
        }]
    }


Pre-defined platform values 
-----------------------------------------------------

Pre-defined values for `element colors <ColorStyle>`__ as well as
`typography inside elements <TextStyle>`__ are located in
``bootstrap-framework/less/pl-variables.less`` (inside of InfinniUI framework). Overlapping is the best to be 
implemented in the file ``<yourProject>/styles/platform-variables.less`` (if you are proceeding with 
``example`` template project).

Bootstrap variable settings level
--------------------------------------

Bootstrap framework settings (basic sizes, tabs, rounds etc) are in
``bootstrap-framework/less/variables.less`` file (inside InfinniUI framework). 
Overlapping is best to be done in
``<yourProject>/styles/bootstrap-variables.less`` file (if you are proceeding with 
``example`` template project).
If you require to overlap bootstrap styles, it can be done 
in ``<yourProject>/styles/bootstrap-theme.less`` file.

Manual styling of css for certain app elements
---------------------------------------------------------------

Css-styles can be applied for a certain element (change margin for a button). One can set to a certain element `metadata Style </Core/Elements/Element.metadata.html>`_. This value will appear as element's additional class which can be assigned a required css-style (or more).

To define custom styles refer to ``<yourProject>/styles/extensions.less``.

See also
---------
.. toctree:: 
   :titlesonly:

   ColorStyle/index.rst
   TextStyle/index.rst

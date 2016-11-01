Getting Started
===================================

This article will guide you to make required prerequisities to start out developing with infinniUI.

Install
---------

Install InfinniUI as a bower package::

   bower install infinni-ui

or clone the git repository `github <https://github.com/InfinniPlatform/InfinniUI>`_,

or :download:`download <../_files/infinni-ui.zip>` as a regular file.

To proceed with running innfinniUI you must install Node.js. Please `download Node.js here <https://nodejs.org/en/>`_. 

Then add `./node_modules/.bin` to the PATH environment variable.

Start Application
------------------

The easiest way to begin with infinniUI development is to use a example project. Go to the folder where InfinniUI was installed and find a folder ``example``.

Execute ``runExample.bat``. This will start a project build and run a local web server available at http://localhost:4444.

Editing project 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Project contents are metadata described as JSON-schema compatible text. Example project displays a generated page by default defined in ``<example>/testConfigurations/stab.json``. In this folder you will find other examples of JSON-schemas pages. You can change metadata source in the following file ``<example>/www/config.js`` - change ``window.InfinniUI.config.homePage`` parameter.

To view more elements which can be used in JSON-schema as well as their syntax please refer to `documentation </Elements/>`_. InfinniUI functionality can be expanded by custom developed elements; you can read more about it `here <./#extention>`_.

Configuration variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To read description of configuration variables please refer to the following part of documentation :doc:`/Core/InfinniUI/InfinniUI.config`.

To overlap required fields one should define them before linking to the platform main js-file.

In example you may see that in ``<example>/www/config.js`` file please note ``config.js`` is linked before ``platform.js`` is.

Styling
~~~~~~~~~~

InfinniUI gives flexible styling features from setting up basic colors and sizes to styles of each element. 
To read more about styling please refer to `the following part of documentation </Core/Style/#bootstrap>`_.


.. _extention:

Extending functionality
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

New functionality can be added easily just link a file with required functionality.

You should do this before linking infinniUI to keep access to platform global variables.

You can either create completely new elements, please refer to an example in folder ``<example>/js/elements/`` or
use functionality of :doc:`/Elements/ExtensionPanel/index`, please refer an example in ``<example>/js/extentionPanels/``.

Keep in mind that many crucial settings are located in ``<example>/www/js/main.js``.

ExtensionPanel.setParameters()
==============================

Устанавливает параметры, передаваемые в прикладной элемент.

Syntax
------

.. code:: js

    serverAction.setParameters(parameters)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - parameters
     - Ассоциативный список параметров


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

     var parameters = {};
    _.each(parametersMetadata, function (parameterMetadata) {
        var param = builder.buildType('Parameter', parameterMetadata, {parentView: parentView});
        parameters[param.getName()] = param;
    });
    serverAction.setParameters(parameters);

See Also
--------

-  `getParameters <ExtensionPanel.getParameters.html>`__

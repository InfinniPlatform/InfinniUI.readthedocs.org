ExtensionPanel.setParameters()
==============================

Устанавливает параметры, передаваемые в прикладной элемент.

Syntax
------

.. code:: js

    extensionPanel.setParameters(parameters)

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
    var typeParameter = new Parameter( { view: parentView } );
    typeParameter.setName( 'type' );
    typeParameter.setValue( 'reCAPTCHA' );

    var parameters = {
      type: typeParameter
    };
    extensionPanel.setParameters( parameters );

See Also
--------

-  `getParameters <ExtensionPanel.getParameters.html>`__

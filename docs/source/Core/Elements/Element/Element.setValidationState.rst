Element.setValidationState()
============================

Устанавливает заданный валидационный статус и валидационное сообщение.

Syntax
------

.. code:: js

    Element.setValidationState(state, message)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - state
     - ``String``
     - Валидационный статус. Может принимать значения: 'success', 'warning', 'error'
   * - message
     - ``String``
     - Валидационное сообщение


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    Element.setValidationState('error', 'Last name is a required field');

See Also
--------

-  `getValidationState() <Element.getValidationState.html>`__

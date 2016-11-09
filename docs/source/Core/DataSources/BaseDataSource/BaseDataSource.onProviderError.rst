BaseDataSource.onProviderError
==============================

Устанавливает `обработчик события <../../Script/>`__ о том, что `поставщик данных </API/Core/DataProviders/>`_ вернул ошибку

Syntax
------

.. code:: js

    BaseDataSource.onProviderError(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../Script/>`__
     - Обработчик события о том, что `поставщик данных </API/Core/DataProviders/>`_ вернул ошибку


Examples
--------

.. code:: js

    BaseDataSource.onProviderError(
      function(context, args) { alert('Provider Error'); }
    );

See Also
--------

-  `DataProvider </Core/DataProviders/>`__

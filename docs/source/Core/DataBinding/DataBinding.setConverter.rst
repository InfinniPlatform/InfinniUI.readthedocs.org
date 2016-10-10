DataBinding.setConverter()
==========================

Устанавливает `преобразователь данных между элементом и
источником <BindingConverter/>`__.

Syntax
------

.. code:: js

    dataBinding.setConverter(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `BindingConverter <BindingConverter/>`__
     - Преобразователь данных между элементом и источником


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    dataBinding.setConverter({
      toSource: function(context, args) {
        return parseInt(args.value); // string to integer
      },
      toElement: function(context, args) {
        return args.value.toString(); // integer to string
      }
    });

See Also
--------

-  `getConverter() <DataBinding.getConverter.html>`__
-  `BindingConverter <BindingConverter/>`__

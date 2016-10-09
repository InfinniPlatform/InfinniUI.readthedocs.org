Parameters
==========

Параметр представления.

Description
-----------

Параметры объявляются в рамках представления и используются для обмена
данными между представлениями.

Syntax
------

.. code:: js

    new Parameter(options);

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``options.view``
     - `View <../../Core/View/View>`__
     - Родительское `представление <../../Core/View/View>`__.


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getName <Parameter.getName.html>`__
     - Возвращает наименование параметра.
   * - `setName <Parameter.setName.html>`__
     - Устанавливает наименование параметра.
   * - `getView <Parameter.getView.html>`__
     - Возвращает родительское представление.
   * - `getValue <Parameter.getValue.html>`__
     - Возвращает значение параметра.
   * - `setValue <Parameter.setValue.html>`__
     - Устанавливает значение параметра.
   * - `getProperty <Parameter.getProperty.html>`__
     - Возвращает значение атрибута параметра.
   * - `setProperty <Parameter.setProperty.html>`__
     - Устанавливает значение атрибута параметра.


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - ``onPropertyChanged``
     - Устанавливает `обработчик события <../../Core/Script/>`__ о том, что значение было изменено.


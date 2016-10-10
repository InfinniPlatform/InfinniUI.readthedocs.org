ObjectFormat.metadata
=====================

Метаданные типа `ObjectFormat <./>`__.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - Format
     - ``String``
     - `Строка форматирования объекта <ObjectFormat.format>`__.


Examples
--------

.. code:: json

    {
      "Format": "{:n2}"
    }

.. code:: json

    {
      "Format": "Birth date: {BirthDate:d}"
    }

.. code:: json

    {
       "Format": "Weight: {Weight:n2} kg"
    }

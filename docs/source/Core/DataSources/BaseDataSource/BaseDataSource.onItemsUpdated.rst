BaseDataSource.onItemsUpdated
=============================

Устанавливает `обработчик события <../../Script/>`__ о том, что
список элементов обновлен.

Description
-----------

Вызов метода `updateItems() <BaseDataSource.updateItems.html>`__
производит загрузку списка элементов из соответствующего источнику
данных хранилища. Если в источнике данных были несохраненные изменения,
они будут потеряны, так как загруженные ранее данные будут заменены
(обновлены) новыми. Успешное обновление списка элементов приводит к
возникновению события
`onItemsUpdated <BaseDataSource.onItemsUpdated.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.onItemsUpdated(callback)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - callback
     - `Script <../../Script/>`__
     - Обработчик события о том, что список элементов обновлен. Параметр args данного обработчика содержит новый список элементов источника данных в поле value


Examples
--------

.. code:: js

    BaseDataSource.onItemsUpdated(
      function(context, args) { alert('Items are updated!'); }
    );

See Also
--------

-  `updateItems() <BaseDataSource.updateItems.html>`__

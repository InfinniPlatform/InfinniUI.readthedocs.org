BaseDataSource.updateItems()
============================

Обновляет список элементов источника данных.

Description
-----------

Вызов метода `updateItems() <BaseDataSource.updateItems.html>`__
производит загрузку списка элементов из соответствующего источнику
данных хранилища. Если в источнике данных были несохраненные изменения,
они будут потеряны, так как загруженные ранее данные будут заменены
(обновлены) новыми. Загрузка элементов производится с учетом всех
имеющихся `фильтров <BaseDataSource.getFilter.html>`__. Успешное
обновление списка элементов приводит к возникновению события
`onItemsUpdated <BaseDataSource.onItemsUpdated.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.updateItems(success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - success
     - `Обработчик события <../../Script/>`__ о том, что список элементов обновлен. Параметр args данного обработчика содержит поле value, в котором хранится новый список элементов источника данных
   * - error
     - `Обработчик события <../../Script/>`__ о том, что при обновлении списка элементов произошла ошибка


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    BaseDataSource.updateItems();

See Also
--------

-  `onItemsUpdated <BaseDataSource.onItemsUpdated.html>`__
-  `getFilter() <BaseDataSource.getFilter.html>`__
-  `isModifiedItems() <BaseDataSource.isModified.html>`__

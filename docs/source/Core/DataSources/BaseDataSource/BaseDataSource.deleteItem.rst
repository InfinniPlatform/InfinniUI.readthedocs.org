BaseDataSource.deleteItem()
===========================

Удаляет элемент в источнике данных.

Description
-----------

Вызов метода `deleteItem() <BaseDataSource.deleteItem.html>`__ производит
удаление указанного элемента в соответствующем источнику данных
хранилище. Успешное удаление элемента приводит к возникновению события
`onItemDeleted <BaseDataSource.onItemDeleted.html>`__. 
В случае, когда `сервер <http://infinniplatform.readthedocs.io/api/reference/InfinniPlatform.Sdk.Documents.Interceptors.IDocumentStorageInterceptor.html>`_ сообщает о невозможности удалить элемент, возникает событие `onErrorValidator <BaseDataSource.onErrorValidator.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.deleteItem(item, success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item\*
     - Элемент источника данных
   * - success
     - `Обработчик события <../../Script/>`__ о том, что элемент удален. Параметр ``args`` данного обработчика содержит поля: source - ссылка на `источник данных <../>`__, value - удаленный элемент
   * - error
     - `Обработчик события <../../Script/>`__ о том, что при удалении элемента произошла ошибка. Параметр ``args`` данного обработчика содержит поля: item - удаляемый элемент, validationResult - `результат валидации <ValidationResult.html>`_ (чтобы данное поле было заполнено, запрашиваемый сервис должен реализовать интерфейс `IDocumentStorageInterceptor <http://infinniplatform.readthedocs.io/api/reference/InfinniPlatform.Sdk.Documents.Interceptors.IDocumentStorageInterceptor.html>`_), originalResponse - ответ сервера


\* Обязательный аргумент.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var items = BaseDataSource.getItems();
    BaseDataSource.deleteItem(items[0]);

See Also
--------

-  `onItemDeleted <BaseDataSource.onItemDeleted.html>`__
-  `createItem() <BaseDataSource.createItem.html>`__
-  `saveItem() <BaseDataSource.saveItem.html>`__

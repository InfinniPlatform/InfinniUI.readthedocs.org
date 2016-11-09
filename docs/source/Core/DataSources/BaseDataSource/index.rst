BaseDataSource
==============

Функция-конструктор, определяющий базовый тип источников данных.

Description
-----------

Источники данных, представленные в InfinniUI, являются потомками BaseDataSource.
В BaseDataSource реализованы базовые API, которые предоставлят все источники данных InfinniUI.

Syntax
------

.. code:: js

    new BaseDataSource(parameters)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parameters
     - ``Object``
     -  Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных


Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `name <BaseDataSource.name.html>`__
     - ``String``
     - Содержит наименование источника данных
   * - `onProviderErrorHandler <BaseDataSource.onProviderErrorHandler.html>`__
     - `Script <../../Script/>`_ 
     - Содержит `обработчик события <../../Script/>`_ о том, что `поставщик данных </Core/DataProviders/>`_ вернул ошибку


Specific Properties
-------------------

Для работы с данными свойствами используйте методы `getProperty <BaseDataSource.getProperty.html>`__ и `setProperty <BaseDataSource.setProperty.html>`__.
Обратите внимание, что для работы с данными свойствами необходимо `указывать точку в названии <BaseDataSource.getProperty/#path-rules>`__.

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - items
     - Список элементов источника данных
   * - selectedItem
     - Выделенный элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getView <BaseDataSource.getView.html>`__
     - Возвращает родительское `представление <../../Elements/View/>`__
   * - `getContext <BaseDataSource.getContext.html>`__
     - Возвращает `контекст родительского представления <../../Context/>`__
   * - `getName <BaseDataSource.getName.html>`__
     - Возвращает наименование источника данных
   * - `setName <BaseDataSource.setName.html>`__
     - Устанавливает наименование источника данных
   * - `getIdProperty <BaseDataSource.getIdProperty.html>`__
     - Возвращает наименование свойства с идентификатором элемента (по умолчанию Id)
   * - `setIdProperty <BaseDataSource.setIdProperty.html>`__
     - Устанавливает наименование свойства с идентификатором элемента
   * - `getFillCreatedItem <BaseDataSource.getFillCreatedItem.html>`__
     - Возвращает, нужно ли предзаполнение новых элементов на сервере
   * - `setFillCreatedItem <BaseDataSource.setFillCreatedItem.html>`__
     - Устанавливает, нужно ли предзаполнение новых элементов на сервере
   * - `getErrorValidator <BaseDataSource.getErrorValidator.html>`__
     - Возвращает `функцию <../../Script/>`__ проверки элемента на ошибки
   * - `setErrorValidator <BaseDataSource.setErrorValidator.html>`__
     - Устанавливает `функцию <../../Script/>`__ проверки элемента на ошибки
   * - `isUpdateSuspended <BaseDataSource.isUpdateSuspended.html>`__
     - Возвращает значение, указывающее, запрещено ли обновление списка элементов
   * - `suspendUpdate <BaseDataSource.suspendUpdate.html>`__
     - Запрещает обновление списка элементов
   * - `resumeUpdate <BaseDataSource.resumeUpdate.html>`__
     - Разрешает обновление списка элементов
   * - `getSelectedItem <BaseDataSource.getSelectedItem.html>`__
     - Возвращает выделенный элемент
   * - `setSelectedItem <BaseDataSource.setSelectedItem.html>`__
     - Устанавливает выделенный элемент
   * - `getProperty <BaseDataSource.getProperty.html>`__
     - Возвращает значение указанного свойства источника
   * - `setProperty <BaseDataSource.setProperty.html>`__
     - Устанавливает значение указанного свойства источника
   * - `isDataReady <BaseDataSource.isDataReady.html>`__
     - Возвращает значение, указывающее, загрузились ли данные в источник или нет
   * - `isLazy <BaseDataSource.isLazy.html>`__
     - Возвращает значение, является ли прогрузка данных в источнике "ленивой" или нет
   * - `setIsLazy <BaseDataSource.setIsLazy.html>`__
     - Устанавливает значение, является ли прогрузка данных в источнике "ленивой" или нет
   * - `idOfItem <BaseDataSource.idOfItem.html>`__
     - Возвращает значение идентификатора по переданному элементу item
   * - `isModified <BaseDataSource.isModified.html>`__
     - Проверяет, является ли элемент несохраненным
   * - `isModifiedItems <BaseDataSource.isModifiedItems.html>`__
     - Проверяет, есть ли несохраненные элементы
   * - `createItem <BaseDataSource.createItem.html>`__
     - Создает новый элемент в источнике данных
   * - `saveItem <BaseDataSource.saveItem.html>`__
     - Сохраняет элемент в источнике данных
   * - `deleteItem <BaseDataSource.deleteItem.html>`__
     - Удаляет элемент из источника данных
   * - `updateItems <BaseDataSource.updateItems.html>`__
     - Обновляет список элементов источника данных
   * - `tryInitData <BaseDataSource.tryInitData.html>`__
     - Пытается обновить список элементов источника. Делает это только в случае, если до этого источник не был прогружен данными
   * - `getItems <BaseDataSource.getItems.html>`__
     - Возвращает список элементов источника данных
   * - `validateOnErrors <BaseDataSource.validateOnErrors.html>`__
     - Осуществляет проверку на ошибки
   * - `initDataProvider <BaseDataSource.initDataProvider.html>`__
     - Определяет обязательное свойство `dataProvider <../../DataProviders/>`__. Наследники BaseDataSource должны переопределять этот метод!
   * - `beforeDeleteItem <BaseDataSource.beforeDeleteItem.html>`__
     - Вы можете переопределить этот метод в наследнике BaseDataSource, если есть необходимость выполнять некие действия перед удалением элемента


Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onSelectedItemChanged <BaseDataSource.onSelectedItemChanged.html>`__
     - станавливает `обработчик события <../../Script/>`__ о том, что выделенный элемент изменился
   * - `onPropertyChanged <BaseDataSource.onPropertyChanged.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что одно из свойств источника изменилось
   * - `onItemCreated <BaseDataSource.onItemCreated.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что элемент создан
   * - `onItemSaved <BaseDataSource.onItemSaved.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что элемент сохранен
   * - `onItemDeleted <BaseDataSource.onItemDeleted.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что элемент удален
   * - `onItemsUpdated <BaseDataSource.onItemsUpdated.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что список элементов обновлен
   * - `onErrorValidator <BaseDataSource.onErrorValidator.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что проверка на ошибки завершена
   * - `onProviderError <BaseDataSource.onProviderError.html>`__
     - Устанавливает `обработчик события <../../Script/>`__ о том, что `поставщик данных </API/Core/DataProviders/>`_ вернул ошибку



.. toctree::
   :hidden:

   BaseDataSource.beforeDeleteItem.rst
   BaseDataSource.createItem.rst
   BaseDataSource.deleteItem.rst
   BaseDataSource.getContext.rst
   BaseDataSource.getErrorValidator.rst
   BaseDataSource.getFillCreatedItem.rst
   BaseDataSource.getIdProperty.rst
   BaseDataSource.getItems.rst
   BaseDataSource.getName.rst
   BaseDataSource.getProperty.rst
   BaseDataSource.getSelectedItem.rst
   BaseDataSource.getView.rst
   BaseDataSource.idOfItem.rst
   BaseDataSource.initDataProvider.rst
   BaseDataSource.isDataReady.rst
   BaseDataSource.isLazy.rst
   BaseDataSource.isModified.rst
   BaseDataSource.isModifiedItems.rst
   BaseDataSource.isUpdateSuspended.rst
   BaseDataSource.metadata.rst
   BaseDataSource.name.rst
   BaseDataSource.onErrorValidator.rst
   BaseDataSource.onItemCreated.rst
   BaseDataSource.onItemDeleted.rst
   BaseDataSource.onItemSaved.rst
   BaseDataSource.onItemsUpdated.rst
   BaseDataSource.onPropertyChanged.rst
   BaseDataSource.onSelectedItemChanged.rst
   BaseDataSource.resumeUpdate.rst
   BaseDataSource.saveItem.rst
   BaseDataSource.setErrorValidator.rst
   BaseDataSource.setFillCreatedItem.rst
   BaseDataSource.setIdProperty.rst
   BaseDataSource.setIsLazy.rst
   BaseDataSource.setName.rst
   BaseDataSource.setProperty.rst
   BaseDataSource.setSelectedItem.rst
   BaseDataSource.suspendUpdate.rst
   BaseDataSource.tryInitData.rst
   BaseDataSource.updateItems.rst
   BaseDataSource.validateOnErrors.rst
   ValidationResult.rst


.. include:: BaseDataSource.metadata.rst
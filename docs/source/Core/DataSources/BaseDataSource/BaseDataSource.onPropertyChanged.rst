BaseDataSource.onPropertyChanged
================================

Устанавливает `обработчик события <../../Script/>`__ о том, что одно
из свойств источника изменилось.

Description
-----------

Методы `getProperty() <BaseDataSource.getProperty.html>`__,
`setProperty() <BaseDataSource.setProperty.html>`__ и событие
`onPropertyChanged <BaseDataSource.onPropertyChanged.html>`__
используются механизмом `привязки данных <../DataBinding/>`__. Вместе
с этим они предоставляют универсальный унифицированный интерфейс для
работы со свойствами источника данных.

Syntax
------

.. code:: js

    BaseDataSource.onPropertyChanged(property, callback, owner)
    BaseDataSource.onPropertyChanged(callback, owner)

Второй вариант сигнатуры позволяет подписаться на изменение всех
свойств.

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - property
     - ``String``
     - Название свойства, изменения которого необходимо отслеживать (подробности использования см. в разделе `Path rules <BaseDataSource.getProperty.html#path-rules>`__)
   * - callback\*
     - `Script <../../Script/>`__
     - Обработчик события о том, что одно из свойств источника изменилось. Параметр ``args`` данного обработчика содержит измененное свойство в поле property
   * - owner
     - –
     - Родительский элемент, используется для автоматической отписки. Должен иметь поле или метод isRemoved. Если isRemoved возвращает истину, происходит автоматическая отписка


\* Обязательный аргумент.

Examples
--------

.. code:: js

    BaseDataSource.onPropertyChanged(
      function(context, args) { alert('Property ' + args.property + ' is changed!'); }
    );

See Also
--------

-  `getProperty() <BaseDataSource.getProperty.html>`__
-  `setProperty() <BaseDataSource.setProperty.html>`__
-  `DataBinding <../DataBinding/>`__

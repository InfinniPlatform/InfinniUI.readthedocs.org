BaseDataSource.setFilter()
==============================

Устанавливает правило фильтрации документов.

Description
-----------

Если в источнике данных `разрешено обновление списка
элементов <../BaseDataSource/BaseDataSource.resumeUpdate.html>`__ и он
уже `обновлялся <../BaseDataSource/BaseDataSource.updateItems.html>`__,
изменение фильтра приводит к автоматическому `обновлению списка
элементов источника
данных <../BaseDataSource/BaseDataSource.updateItems.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.setFilter(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``:sup:`1`
     - Правило фильтрации документов


:sup:`1` `Шаблонизируемая величина <../RestDataSource/#parameters-templating>`__. 
Для определения параметров используйте метод `setFilterParams() <BaseDataSource.setFilterParams.html>`__.

Returns
~~~~~~~

Метод ничего не возвращает.

Filter Format
-------------

.. list-table::
   :header-rows: 1

   * - Syntax
     - Description
   * -  
     - **Логические функции**
   * -  
     - *Обозначим, через f\_1, f\_2, ... - функции возвращающие булевы значения*
   * - not(f\_1)
     - Вернёт элементы, которые не подходят под условие filter\_1
   * - or(f\_1, f\_2, ...)
     - Вернёт элементы, в которых выполняется хотя бы одно из условий filter\_1, filter\_2, ...
   * - and(f\_1, f\_2, ...)
     - Вернёт элементы, в которых выполняются все условия filter\_1, filter\_2, ...
   * -  
     - **Функции фильтрации по свойствам элементов источника данных**
   * - exists(propertyName[, flag])
     - Вернёт элементы, которые содержат свойство propertyName (причем его значение != null и != undefined). Если указан flag=false, то, напротив, будут выбраны элементы, которые не содержат свойства propertyName
   * - type(propertyName, type)
     - Вернёт элементы, в которых свойство propertyName принимает значение типа type
   * - in(propertyName, arg1, arg2, ...)
     - Вернёт элементы, которые в свойстве propertyName содержат значения arg1, arg2, ...
   * - notIn(propertyName, arg1, arg2, ...)
     - Вернёт элементы, которые в свойстве propertyName не содержат значений arg1, arg2, ...
   * - eq(propertyName, value)
     - Вернёт элементы, в которых свойство propertyName принимает значение value
   * - notEq(propertyName, value)
     - Вернёт элементы, в которых свойство propertyName принимает значение отличное от value
   * - gt(propertyName, value)
     - Вернёт элементы, в которых свойство propertyName принимает значение большее, чем value
   * - gte(propertyName, value)
     - Вернёт элементы, в которых свойство propertyName принимает значение, которое больше либо равно value
   * - lt(propertyName, value)
     - Вернёт элементы, в которых свойство propertyName принимает значение меньшее, чем value
   * - lte(propertyName, value)
     - Вернёт элементы, в которых свойство propertyName принимает значение, которое меньше либо равно value
   * - regex(propertyName, pattern[, arg1, arg2, ...])
     - Вернёт элементы, в которых свойство propertyName соответсвут шаблону pattern. В качестве arg1, arg2, ... можно передать настройки regex. Возможны следующие настройки: *IgnoreCase* - Игнорирует регистр символов. *Singleline* - Указывает однострочный режим. Изменяет значение точки (.) так, что она соответствует любому символу (вместо любого символа, кроме ":raw-latex:`\n`"). *Multiline* - Многострочный режим. Изменяет значение символов "^" и "$" так, что они совпадают, соответственно, в начале и конце любой строки, а не только в начале и конце целой строки.
   * - startsWith(propertyName, value[, ignoreCase = true])
     - Вернёт элементы, в которых свойство propertyName начинается подстрокой value
   * - endsWith(propertyName, value[, ignoreCase = true])
     - Вернёт элементы, в которых свойство propertyName заканчивается подстрокой value
   * - contains(propertyName, value[, ignoreCase = true])
     - Вернёт элементы, в которых свойство propertyName содержит подстроку value
   * -  
     - **Функции фильтрации по содержимому массивов, хранящихся в элементах**
   * -  
     - *Обозначим через arrayProperty - свойство ссылающееся на массив*
   * - match(arrayProperty, f\_1)
     - Хотя бы один из элементов массива удовлетворяет условию f\_1
   * - all(arrayProperty, arg1, arg2, ...)
     - Все элементы из массива входят в множество [arg1, arg2, ...]
   * - anyIn(arrayProperty, arg1, arg2, ...)
     - Хотя бы один из элементов массива входит в множество [arg1, arg2, ...]
   * - anyNotIn(arrayProperty, arg1, arg2, ...)
     - Хотя бы один из элементов массива не входит в множество [arg1, arg2, ...]
   * - anyEq(arrayProperty, value)
     - Хотя бы один из элементов массива принимает значение value
   * - anyNotEq(arrayProperty, value)
     - Хотя бы один из элементов массива принимает значение отличное от value
   * - anyGt(arrayProperty, value)
     - Хотя бы один из элементов массива принимает значение большее, чем value
   * - anyGte(arrayProperty, value)
     - Хотя бы один из элементов массива принимает значение, которое больше либо равно value
   * - anyLt(arrayProperty, value)
     - Хотя бы один из элементов массива принимает значение меньшее, чем value
   * - anyLte(arrayProperty, value)
     - Хотя бы один из элементов массива принимает значение, которое меньше либо равно value
   * - sizeEq(arrayProperty, size)
     - Число элементов массива равно size
   * - sizeGt(arrayProperty, size)
     - Число элементов массива больше чем size
   * - sizeGte(arrayProperty, size)
     - Число элементов массива больше либо равно size
   * - sizeLt(arrayProperty, size)
     - Число элементов массива меньше чем size
   * - sizeLte(arrayProperty, size)
     - Число элементов массива меньше либо равно size
   * - 
     - **Полнотекстовый поиск**
   * - text(search[, language = null[, caseSensitive = false[, diacriticSensitive = false]]])
     - Вернёт элементы, в которых содержится строка search. Если указать language(напр, 'ru'), то поиск будет осуществляться с учётом особенностей данного языка. Если в параметрах caseSensitive и diacriticSensitive передать значение true, то поиск будет осуществляться с учётом регистра и диакритических знаков


Examples
--------

Вернет элементы, в которых поле '\_id' равно 123:

.. code:: js

    dataSource.setFilter("eq(_id,123)");

Вернет элементы, в которых 'birthday' > '2012-01-26T13:51:50.417Z':

.. code:: js

    dataSource.setFilter("gt(birthday,date('2012-01-26T13:51:50.417Z'))");

Вернет элементы, в которых 'FirstName' соответсвует маске
'^И(ван|рина)$' (не зависит от регистра):

.. code:: js

    dataSource.setFilter("regex(FirstName, '^И(ван|рина)$', IgnoreCase)");

Вернет элементы, в которых 'FirstName' начинается с 'Але' (с учётом
регистра):

.. code:: js

    dataSource.setFilter("startsWith(FirstName, 'Але', false)");

Вернет элементы, в которых хотя бы один из элементов массива props
содержит значение 'font' в поле name:

.. code:: js

    dataSource.setFilter("match(props, eq(name,'font'))");

Вернет элементы, в которых хотя бы один из элементов массива items не
входит в множество [true, 34535, 'hello']:

.. code:: js

    dataSource.setFilter("anyNotIn(items, true, 34535, 'hello')");

Вернет элементы, в которых либо id=423434, либо id=231 и isActive=true:

.. code:: js

    dataSource.setFilter("or(and(eq(id,231),eq(isActive,true)),eq(id,423434))");

Сработает регистрозависимый полнотекстовый поиск:

.. code:: js

    dataSource.setFilter("text('Иванов Иван Иванович', null, true)");

See Also
--------

-  `setFilterParams() <BaseDataSource.setFilterParams.html>`__
-  `getFilterParams() <BaseDataSource.getFilterParams.html>`__
-  `getFilter() <BaseDataSource.getFilter.html>`__
-  `updateItems() <BaseDataSource.updateItems.html>`__
-  `suspendUpdate() <BaseDataSource.suspendUpdate.html>`__
-  `resumeUpdate() <BaseDataSource.resumeUpdate.html>`__

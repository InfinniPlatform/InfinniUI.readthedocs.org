DataBinding.bindSource()
========================

Устанавливает привязку к источнику.

Description
-----------

Осуществляет подписку на событие изменения указанного свойства
  источника данных привязки - ``onPropertyChanged``. В обработчике этого
  события производится оповещение элемента, ранее установленного в
  методе `bindElement() <DataBinding.bindElement.html>`__, о произошедших
  в источнике изменениях.
При этом проверяется, что направление обмена данными в привязке
  установлено в `twoWay <BindingMode/>`__ или
  `toElement <BindingMode/>`__. Если данное условие выполняется, у
  элемента вызывается метод ``setProperty()``, которому передается
  наименование целевого свойства элемента и новое значение этого
  свойства.
Если в привязке был указан `преобразователь
  данных <BindingConverter>`__ для элемента, в качестве нового
  значения будет передан результат конвертации значения источника в
  формат данных элемента.

Syntax
------

.. code:: js

    dataBinding.bindSource(source, property)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - source
     - `визуальный элемент <../Elements/>`__ / `источник данных <../DataSources/>`__ / `параметр представления <../Parameters/>`__
     - Источник данных привязки
   * - property
     - ``String``
     - Путь к свойству источника данных привязки


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    dataBinding.bindSource(context.dataSources['DataSource1'], '$.FirstName');

See Also
--------

-  `getSource() <DataBinding.getSource.html>`__
-  `getSourceProperty() <DataBinding.getSourceProperty.html>`__
-  `bindElement() <DataBinding.bindElement.html>`__
-  `BindingMode <BindingMode>`__
-  `BindingConverter <BindingConverter>`__

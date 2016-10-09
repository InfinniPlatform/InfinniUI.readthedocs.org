DataBinding.bindElement()
=========================

Устанавливает привязку к элементу.

Description
-----------

Осуществляет подписку на событие изменения указанного свойства
  элемента привязки - ``onPropertyChanged``. В обработчике этого события
  производится оповещение источника данных привязки, ранее
  установленного в методе `bindSource() <../DataBinding.bindSource.html>`__,
  о произошедших в источнике изменениях.
При этом проверяется, что направление обмена данными в привязке
  установлено в `twoWay <../BindingMode/>`__ или
  `toSource <../BindingMode/>`__. Если данное условие выполняется, у
  источника вызывается метод ``setProperty()``, которому передается
  наименование целевого свойства источника и новое значение этого
  свойства.
Если в привязке был указан `преобразователь
  данных <../BindingConverter>`__ для источника, в качестве нового
  значения будет передан результат конвертации значения элемента в
  формат данных источника.

Syntax
------

.. code:: js

    dataBinding.bindElement(element, property)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - element
     - `визуальный элемент <../../Elements/>`__ / `источник данных <../../DataSources/>`__ / `параметр представления <../../Parameters/>`__
     - Элемент привязки
   * - property
     - ``String``
     - Путь к свойству элемента привязки


Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    dataBinding.bindElement(context.controls['TextBox1'], 'Value');

See Also
--------

-  `getElement() <../DataBinding.getElement.html>`__
-  `getElementProperty() <../DataBinding.getElementProperty.html>`__
-  `bindSource() <../DataBinding.bindSource.html>`__
-  `BindingMode <../BindingMode>`__
-  `BindingConverter <../BindingConverter>`__

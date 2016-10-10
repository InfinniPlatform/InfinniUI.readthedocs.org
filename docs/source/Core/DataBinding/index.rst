DataBinding
===========

Привязка данных между элементом и источником.

Description
-----------

Привязка данных позволяет синхронизировать значения свойств двух
различных объектов. Один объект условно называется элементом, другой -
источником. В роли элемента чаще всего выступают
`элементы <../Elements/>`__ `визуального
представления <../Elements/View/>`__, в роли источника - `источники
данных <../DataSources/>`__. Принципиально не важно, какой элемент будет
элементом, а какой источником, так как оба реализуют один и тот же
интерфейс. Объектами, которые поддерживают привязку данных являются все
типы визуальных `визуальных элементов <../Elements/>`__, все типы
`источников данных <../DataSources/>`__ и `параметр
представления <../Parameters/>`__.

Любая привязка данных представлена невизуальным программным объектом,
который позволяет указать `правила преобразования
данных <BindingConverter/>`__ для элемента и источника, а также желаемое
`направление потока данных в привязке <BindingMode/>`__:

-  Двунаправленный обмен между элементом и источником (two way) - если в
   источнике произошли изменения, элемент обновляется, и, наоборот, если
   изменения произошли в элементе, источник обновляется.
-  Только обновление источника (to source) - если в источнике произошли
   изменения, элемент не обновляется, но, если изменения произошли в
   элементе, источник обновляется.
-  Только обновление элемента (to element) - если в источнике произошли
   изменения, элемент обновляется, но, если изменения произошли в
   элементе, источник не обновляется.

Таким образом, привязка данных скрывает всю сложность синхронизации
между элементом и источником, что в значительной степени упрощает код и
обеспечивает предсказуемость поведения всех элементов.

.. figure:: DataBindingAspects.png
   :alt: 

Syntax
------

.. code:: js

    new DataBinding()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

DataBinding

Usage
-----

.. code:: js

    //js-demo
    var element = new TextBox();
    var $element = element.render();
    element.setLabelText("Element");

    var source = new TextBox();
    var $source = source.render();
    source.setLabelText("Source");

    var binding = new DataBinding();
    binding.setMode('ToSource');
    binding.bindSource(source, 'value');
    binding.bindElement(element, 'value');

    $elementForExample.append($element);
    $elementForExample.append($source);

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getMode <DataBinding.getMode.html>`__
     - Возвращает `направление потока данных в привязке <BindingMode/>`__
   * - `setMode <DataBinding.setMode.html>`__
     - Устанавливает `направление потока данных в привязке <BindingMode/>`__
   * - `getConverter <DataBinding.getConverter.html>`__
     - Возвращает `преобразователь данных между элементом и источником <BindingConverter/>`__
   * - `setConverter <DataBinding.setConverter.html>`__
     - Устанавливает `преобразователь данных между элементом и источником <BindingConverter/>`__
   * - `bindSource <DataBinding.bindSource.html>`__
     - Устанавливает привязку к источнику
   * - `getSource <DataBinding.getSource.html>`__
     - Возвращает источник данных привязки
   * - `getSourceProperty <DataBinding.getSourceProperty.html>`__
     - Возвращает путь к свойству источника данных привязки
   * - `bindElement <DataBinding.bindElement.html>`__
     - Устанавливает привязку к элементу
   * - `getElement <DataBinding.getElement.html>`__
     - Возвращает элемент привязки
   * - `getElementProperty <DataBinding.getElementProperty.html>`__
     - Возвращает путь к свойству элемента привязки
   * - `getDefaultValue <DataBinding.getDefaultValue.html>`__
     - Возвращает значение по умолчанию для элемента
   * - `setDefaultValue <DataBinding.setDefaultValue.html>`__
     - Устанавливает значение по умолчанию для элемента


Events
------

Нет


.. toctree::
   :hidden:

   BindingConverter/index.rst
   BindingMode/index.rst
   DataBinding.bindElement.rst
   DataBinding.bindSource.rst
   DataBinding.getConverter.rst
   DataBinding.getDefaultValue.rst
   DataBinding.getElement.rst
   DataBinding.getElementProperty.rst
   DataBinding.getMode.rst
   DataBinding.getSource.rst
   DataBinding.getSourceProperty.rst
   DataBinding.metadata.rst
   DataBinding.setConverter.rst
   DataBinding.setDefaultValue.rst
   DataBinding.setMode.rst

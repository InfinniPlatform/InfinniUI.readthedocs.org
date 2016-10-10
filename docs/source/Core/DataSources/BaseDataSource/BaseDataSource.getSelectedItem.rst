BaseDataSource.getSelectedItem()
================================

Возвращает выделенный элемент.

Description
-----------

В каждый момент времени пользователь может работать только с одним
элементом - выделенным элементом. Зачастую это элемент, на котором
установлен фокус ввода. Например, редактируемый элемент, выбранный
элемент в списке и т.д. Источник данных хранит информацию о выделенном
элементе, благодаря чему имеется возможность определять элемент данных,
с которым работает пользователь.

Syntax
------

.. code:: js

    BaseDataSource.getSelectedItem()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

Выделенный элемент источника данных.

Examples
--------

.. code:: js

    var selectedItem = BaseDataSource.getSelectedItem();

See Also
--------

-  `setSelectedItem() <BaseDataSource.setSelectedItem.html>`__
-  `onSelectedItemChanged <BaseDataSource.onSelectedItemChanged.html>`__

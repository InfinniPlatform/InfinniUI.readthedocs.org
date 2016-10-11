BaseDataSource.setSelectedItem()
================================

Устанавливает выделенный элемент.

Description
-----------

В каждый момент времени пользователь может работать только с одним
элементом - выделенным элементом. Зачастую это элемент, на котором
установлен фокус ввода. Например, редактируемый элемент, выбранный
элемент в списке и т.д. Источник данных хранит информацию о выделенном
элементе, благодаря чему имеется возможность определять элемент данных,
с которым работает пользователь. Изменение выделенного элемента приводит
к возникновению события
`onSelectedItemChanged <BaseDataSource.onSelectedItemChanged.html>`__.

Syntax
------

.. code:: js

    BaseDataSource.setSelectedItem(item, success, error)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - item\*
     - Элемент источника данных
   * - success
     - `Обработчик события <../../Script/>`__ о том, что выделенный элемент изменился. Параметр args данного обработчика содержит поле source, в котором хранится ссылка на `источник данных <../>`__ 
   * - error
     - `Обработчик события <../../Script/>`__ о том, что при изменении выделенного элемента произошла ошибка. Параметр args данного обработчика содержит поле error, хранящее сообщение об ошибке


\* Обязательный аргумент.

Returns
~~~~~~~

Метод ничего не возвращает.

Examples
--------

.. code:: js

    var items = BaseDataSource.getItems();
    BaseDataSource.setSelectedItem(items[0]);

See Also
--------

-  `getSelectedItem() <BaseDataSource.getSelectedItem.html>`__
-  `onSelectedItemChanged <BaseDataSource.onSelectedItemChanged.html>`__

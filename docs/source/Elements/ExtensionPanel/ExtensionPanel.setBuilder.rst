ExtensionPanel.setBuilder()
===========================

Устанавливает `Builder </Core/Builders/>`__. Builder может быть
полезен, когда по каким-либо причинам
`itemTemplate </Core/Elements/Container/Container.setItemTemplate.html>`__
неприменим.

Syntax
------

.. code:: js

    Element.setBuilder(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - `Builder </Core/Builders/>`__
     - Построитель элементов


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    Element.setBuilder(new ApplicationBuilder());

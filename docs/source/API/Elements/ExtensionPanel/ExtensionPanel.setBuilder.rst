ExtensionPanel.setBuilder()
===========================

Устанавливает `Builder </docs/Api/Core/Builders/>`__. Builder может быть
полезен, когда по каким-либо причинам
`itemTemplate </docs/API/Core/Elements/Container/Container.setItemTemplate.html>`__
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
     - `Builder </docs/Api/Core/Builders/>`__
     - Построитель элементов


Returns
~~~~~~~

Метод не возвращает значений.

Examples
--------

.. code:: js

    Element.setBuilder(new ApplicationBuilder());

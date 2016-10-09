MenuBar.highlightItem
=====================

Устанавливает или снимает выделение с элемента меню с заданным именем.

Syntax
------

.. code:: js

    MenuBar.highlightItem([name])

Parameters
~~~~~~~~~~

+-------+-------------+------------+
Name  | Type        | Descriptio |
      |             | n          |
+=======+=============+============+
name  | ``String``  | Имя        |
      |             | выделяемог |
      |             | о          |
      |             | элемента.  |
      |             | Если не    |
      |             | указано -  |
      |             | для снятия |
      |             | выделения. |
+-------+-------------+------------+

Returns
~~~~~~~

Нет

Examples
--------

.. code:: js

    menuBar.highlightItem("AddMenuItem");   //Выделить элемент с именем "AddMenuItem"

    menuBar.highlightItem();   //Снять выделение с пунктов меню

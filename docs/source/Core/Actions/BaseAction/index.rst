BaseAction
==========

Description
-----------

Действия, представленные в InfinniUI, являются потомками BaseAction.
В BaseAction реализованы базовые API, которые предоставлят все
  действия InfinniUI.

Syntax
------

.. code:: js

    new BaseAction(parentView)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parentView
     - `View <../Elements/View/>`__
     -  Родительское представление 


Properties
----------

Нет

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `execute <BaseAction.execute.html>`__
     - Выполняет заданное действие
   * - `initDefaultValues <BaseAction.initDefaultValues.html>`__
     - Инициирует значения по умолчанию
   * - `getProperty <BaseAction.getProperty.html>`__
     - Возвращает значение свойства по имени
   * - `setProperty <BaseAction.setProperty.html>`__
     - Устанавливает значение свойства по имени


Events
------

Нет


.. toctree::
   :hidden:

   BaseAction.execute.rst
   BaseAction.getProperty.rst
   BaseAction.initDefaultValues.rst
   BaseAction.metadata.rst
   BaseAction.setProperty.rst

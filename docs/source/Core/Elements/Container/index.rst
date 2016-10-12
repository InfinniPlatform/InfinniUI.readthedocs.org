Container
=========

Базовый тип для контейнеров визуальных элементов представления.

Description
-----------

`Визуальные элементы <../Element/>`__, которые могут содержать внутри
себя другие визуальные элементы, называются контейнерами, композитными
или составными элементами. При этом сам контейнер называют родительским
элементом, а его содержимое - дочерними элементами. Дочерние элементы не
могут выходить за границы контейнера, но способ их расположения
определяется каждым типом контейнера в отдельности и может не зависеть
от настроек дочерних элементов.

Extends
-------

`Element <../Element/>`__

Syntax
------

.. code:: js

    new Container(parent)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - parent
     - `Element <../Element/>`__
     - Родительский элемент


Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `getItemTemplate <Container.getItemTemplate.html>`__
     - Возвращает `функцию <../../Script/>`__ шаблонизации дочерних элементов контейнера
   * - `setItemTemplate <Container.setItemTemplate.html>`__
     - Устанавливает `функцию <../../Script/>`__ шаблонизации дочерних элементов контейнера
   * - `getItems <Container.getItems.html>`__
     - Возвращает `коллекцию <../../Collection/>`__ дочерних элементов контейнера
   * - `getGroupValueSelector <Container.getGroupValueSelector.html>`__
     - Возвращает `функцию <../../Script/>`__, определяющую условие группировки дочерних элементов контейнера
   * - `setGroupValueSelector <Container.setGroupValueSelector.html>`__
     - Устанавливает `функцию <../../Script/>`__, определяющую условие группировки дочерних элементов контейнера
   * - `getGroupItemTemplate <Container.getGroupItemTemplate.html>`__
     - Возвращает `функцию <../../Script/>`__ шаблонизации заголовков групп
   * - `setGroupItemTemplate <Container.setGroupItemTemplate.html>`__
     - Устанавливает `функцию <../../Script/>`__ шаблонизации заголовков групп


Events
------

Нет


.. toctree::
   :hidden:

   Container.getGroupItemTemplate.rst
   Container.getGroupValueSelector.rst
   Container.getItems.rst
   Container.getItemTemplate.rst
   Container.metadata.rst
   Container.setGroupItemTemplate.rst
   Container.setGroupValueSelector.rst
   Container.setItemTemplate.rst


.. include:: Container.metadata.rst
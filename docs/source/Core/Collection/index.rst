Collection
==========

Коллекция элементов с возможностью получения уведомлений о ее
изменениях.

Description
-----------

Во многих случаях, данные, с которыми работает пользователь, являются
коллекцией элементов. При этом требуется, чтобы при модификации
коллекции изменения находили отражение в интерфейсе пользователя. Для
решения указанных проблем используется тип ``Collection``, который
предоставляет все методы, необходимые для работы с коллекцией элементов,
плюс, имеет список событий, позволяющих узнать обо всех произошедших в
коллекции изменениях.

Syntax
------

.. code:: js

    new Collection(items, idProperty, comparator)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - items
     - ``Array``
     - Массив для инициализации коллекции.
   * - idProperty
     - ``String``
     - Свойство с идентификатором элемента коллекции.
   * - comparator
     - `comparator <Comparator.html>`__
     - Функция сравнения элементов коллекции.

Properties
----------

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `length <Collection.length.html>`__
     - ``Integer``
     - Возвращает количество элементов в коллекции.
   * - `idProperty <Collection.idProperty.html>`__
     - ``String``
     - Возвращает свойство с идентификатором элемента коллекции.
   * - `comparator <Collection.comparator.html>`__
     - `comparator <Comparator.html>`__
     - Возвращает функцию сравнения элементов коллекции.

Methods
-------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `size <Collection.size.html>`__
     - Возвращает количество элементов в коллекции.
   * - `push <Collection.push.html>`__
     - Добавляет элемент в конец коллекции.
   * - `add <Collection.add.html>`__
     - Добавляет элемент в конец коллекции.
   * - `addAll <Collection.addAll.html>`__
     - Добавляет элементы в конец коллекции.
   * - `insert <Collection.insert.html>`__
     - Вставляет элемент в указанную позицию коллекции.
   * - `insertAll <Collection.insertAll.html>`__
     - Вставляет элементы, начиная с указанной позиции коллекции.
   * - `reset <Collection.reset.html>`__
     - Устанавливает список элементов коллекции.
   * - `set <Collection.set.html>`__
     - Обновляет список элементов коллекции.
   * - `replace <Collection.replace.html>`__
     - Заменяет элемент коллекции на указанный.
   * - `pop <Collection.pop.html>`__
     - Удаляет последний элемент из коллекции.
   * - `remove <Collection.remove.html>`__
     - Удаляет указанный элемент из коллекции.
   * - `removeById <Collection.removeById.html>`__
     - Удаляет элемент с указанным идентификатором из коллекции.
   * - `removeAt <Collection.removeAt.html>`__
     - Удаляет элемент с указанным индексом из коллекции.
   * - `removeAll <Collection.removeAll.html>`__
     - Удаляет указанные элементы из коллекции.
   * - `removeRange <Collection.removeRange.html>`__
     - Удаляет диапазон элементов из коллекции.
   * - `removeEvery <Collection.removeEvery.html>`__
     - Удаляет все элементы из коллекции, удовлетворяющие указанному условию.
   * - `clear <Collection.clear.html>`__
     - Удаляет все элементы из коллекции.
   * - `getById <Collection.getById.html>`__
     - Возвращает элемент коллекции с заданным идентификатором.
   * - `getByIndex <Collection.getByIndex.html>`__
     - Возвращает элемент коллекции с заданным индексом.
   * - `find <Collection.find.html>`__
     - Возвращает первый найденный элемент коллекции, удовлетворяющий условию.
   * - `indexOf <Collection.indexOf.html>`__
     - Возвращает индекс первого найденного элемента коллекции при поиске с начала.
   * - `lastIndexOf <Collection.lastIndexOf.html>`__
     - Возвращает индекс первого найденного элемента коллекции при поиске с конца.
   * - `findIndex <Collection.findIndex.html>`__
     - Возвращает индекс первого найденного элемента коллекции, удовлетворяющего условию.
   * - `contains <Collection.contains.html>`__
     - Проверяет наличие указанного элемента в коллекции.
   * - `contains <Collection.contains.html>`__
     - Проверяет наличие указанного элемента в коллекции.
   * - `every <Collection.every.html>`__
     - Проверяет, что каждый элемент коллекции удовлетворяет указанному условию.
   * - `some <Collection.some.html>`__
     - Проверяет, что некоторый элемент коллекции удовлетворяет указанному условию.
   * - `forEach <Collection.forEach.html>`__
     - Перечисляет все элементы коллекции.
   * - `filter <Collection.filter.html>`__
     - Возвращает элементы коллекции, удовлетворяющие указанному условию.
   * - `take <Collection.take.html>`__
     - Возвращает указанный диапазон элементов коллекции.
   * - `toArray <Collection.toArray.html>`__
     - Возвращает массив всех элементов коллекции.
   * - `move <Collection.move.html>`__
     - Перемещает элемент коллекции в позицию с указанным индексом.
   * - `sort <Collection.sort.html>`__
     - Сортирует список элементов коллекции.
   * - `clone <Collection.clone.html>`__
     - Создает копию коллекции элементов.
   * - `setProperty <Collection.setProperty.html>`__
     - Устанавливает значение атрибута для элемента.
   * - `getProperty <Collection.getProperty.html>`__
     - Возвращает значение атрибута элемента.

Events
------

.. list-table::
   :header-rows: 1

   * - Name
     - Description
   * - `onAdd <Collection.onAdd.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что произошло добавление элементов.
   * - `onReplace <Collection.onReplace.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что произошла замена элементов.
   * - `onRemove <Collection.onRemove.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что произошло удаление элементов.
   * - `onMove <Collection.onMove.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что произошло перемещение элементов.
   * - `onReset <Collection.onReset.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что произошли существенные изменения.
   * - `onChange <Collection.onChange.html>`__
     - Устанавливает `обработчик события <../Script/>`__ о том, что произошли какие-то изменения.

.. toctree::
   :hidden:

   Collection.add.rst
   Collection.addAll.rst
   Collection.clear.rst
   Collection.clone.rst
   Collection.comparator.rst
   Collection.contains.rst
   Collection.every.rst
   Collection.filter.rst
   Collection.find.rst
   Collection.findIndex.rst
   Collection.forEach.rst
   Collection.getById.rst
   Collection.getByIndex.rst
   Collection.getProperty.rst
   Collection.idProperty.rst
   Collection.indexOf.rst
   Collection.insert.rst
   Collection.insertAll.rst
   Collection.lastIndexOf.rst
   Collection.length.rst
   Collection.move.rst
   Collection.onAdd.rst
   Collection.onChange.rst
   Collection.onMove.rst
   Collection.onRemove.rst
   Collection.onReplace.rst
   Collection.onReset.rst
   Collection.pop.rst
   Collection.push.rst
   Collection.remove.rst
   Collection.removeAll.rst
   Collection.removeAt.rst
   Collection.removeById.rst
   Collection.removeEvery.rst
   Collection.removeRange.rst
   Collection.replace.rst
   Collection.reset.rst
   Collection.set.rst
   Collection.setProperty.rst
   Collection.size.rst
   Collection.some.rst
   Collection.sort.rst
   Collection.take.rst
   Collection.toArray.rst
   Comparator.rst

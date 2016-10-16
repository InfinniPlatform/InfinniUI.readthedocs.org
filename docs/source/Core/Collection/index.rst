Collection
==========

Collections of elements can recieve notifications upon change updates.

Description
-----------

In many cases data is processed by user is a collection of elements. It is required while modifying collection that changes are properly indicated in UI. To resolve this ``Collection`` type can be implemented. It has all methods required to work with the collection and list of events to get notified about all changes that occured to the collection.

Syntax
------

.. code:: js

    new Collection(items, idProperty, comparator)

Parameters
~~~~~~~~~~

\|Name\|Type\|Description\| \|\ ``items``\ \|\ ``Array``\ \|Array to initialize collection.\|
\|\ ``idProperty``\ \|\ ``String``\ \|Property identificator of collection elements.\|
\|\ ``comparator``\ \|\ `comparator <Comparator/>`__\ \|\ `Function that compares collection of elements <Comparator/>`__.\|

Properties
----------

\|Name\|Type\|Description\|
\|\ `length <Collection.length/>`__\ \|\ ``Integer``\ \|Returns number of elements in collection.\|
\|\ `idProperty <Collection.idProperty/>`__\ \|\ ``String``\ \|Returns identificator property of element in collection.\|
\|\ `comparator <Collection.comparator/>`__\ \|\ `comparator <Comparator/>`__\ \|Returns
`function of comparison of elements in collection <Comparator/>`__.

Methods
-------

\|Name\|Description\| \|\ `size <Collection.size/>`__\ \|Возвращает
количество элементов в коллекции.\|
\|\ `push <Collection.push/>`__\ \|Добавляет элемент в конец
коллекции.\| \|\ `add <Collection.add/>`__\ \|Добавляет элемент в конец
коллекции.\| \|\ `addAll <Collection.addAll/>`__\ \|Добавляет элементы в
конец коллекции.\| \|\ `insert <Collection.insert/>`__\ \|Вставляет
элемент в указанную позицию коллекции.\|
\|\ `insertAll <Collection.insertAll/>`__\ \|Вставляет элементы, начиная
с указанной позиции коллекции.\|
\|\ `reset <Collection.reset/>`__\ \|Устанавливает список элементов
коллекции.\| \|\ `set <Collection.set/>`__\ \|Обновляет список элементов
коллекции.\| \|\ `replace <Collection.replace/>`__\ \|Заменяет элемент
коллекции на указанный.\| \|\ `pop <Collection.pop/>`__\ \|Удаляет
последний элемент из коллекции.\|
\|\ `remove <Collection.remove/>`__\ \|Удаляет указанный элемент из
коллекции.\| \|\ `removeById <Collection.removeById/>`__\ \|Удаляет
элемент с указанным идентификатором из коллекции.\|
\|\ `removeAt <Collection.removeAt/>`__\ \|Удаляет элемент с указанным
индексом из коллекции.\|
\|\ `removeAll <Collection.removeAll/>`__\ \|Удаляет указанные элементы
из коллекции.\| \|\ `removeRange <Collection.removeRange/>`__\ \|Удаляет
диапазон элементов из коллекции.\|
\|\ `removeEvery <Collection.removeEvery/>`__\ \|Удаляет все элементы из
коллекции, удовлетворяющие указанному условию.\|
\|\ `clear <Collection.clear/>`__\ \|Удаляет все элементы из
коллекции.\| \|\ `getById <Collection.getById/>`__\ \|Возвращает элемент
коллекции с заданным идентификатором.\|
\|\ `getByIndex <Collection.getByIndex/>`__\ \|Возвращает элемент
коллекции с заданным индексом.\|
\|\ `find <Collection.find/>`__\ \|Возвращает первый найденный элемент
коллекции, удовлетворяющий условию.
\|\ `indexOf <Collection.indexOf/>`__\ \|Возвращает индекс первого
найденного элемента коллекции при поиске с начала.\|
\|\ `lastIndexOf <Collection.lastIndexOf/>`__\ \|Возвращает индекс
первого найденного элемента коллекции при поиске с конца.\|
\|\ `findIndex <Collection.findIndex/>`__\ \|Возвращает индекс первого
найденного элемента коллекции, удовлетворяющего условию.\|
\|\ `contains <Collection.contains/>`__\ \|Проверяет наличие указанного
элемента в коллекции.\| \|\ `every <Collection.every/>`__\ \|Проверяет,
что каждый элемент коллекции удовлетворяет указанному условию.\|
\|\ `some <Collection.some/>`__\ \|Проверяет, что некоторый элемент
коллекции удовлетворяет указанному условию.\|
\|\ `forEach <Collection.forEach/>`__\ \|Перечисляет все элементы
коллекции. \|\ `filter <Collection.filter/>`__\ \|Возвращает элементы
коллекции, удовлетворяющие указанному условию.\|
\|\ `take <Collection.take/>`__\ \|Возвращает указанный диапазон
элементов коллекции.\|
\|\ `toArray <Collection.toArray/>`__\ \|Возвращает массив всех
элементов коллекции.\| \|\ `move <Collection.move/>`__\ \|Перемещает
элемент коллекции в позицию с указанным индексом.\|
\|\ `sort <Collection.sort/>`__\ \|Сортирует список элементов
коллекции.\| \|\ `clone <Collection.clone/>`__\ \|Создает копию
коллекции элементов.\|
\|\ `setProperty <Collection.setProperty/>`__\ \|Устанавливает значение
атрибута для элемента.\|
\|\ `getProperty <Collection.getProperty/>`__\ \|Возвращает значение
атрибута элемента.\|

Events
------

\|Name\|Description\| \|\ `onAdd <Collection.onAdd/>`__\ \|Устанавливает
`обработчик события <../Script/>`__ о том, что произошло добавление
элементов.\| \|\ `onReplace <Collection.onReplace/>`__\ \|Устанавливает
`обработчик события <../Script/>`__ о том, что произошла замена
элементов.\| \|\ `onRemove <Collection.onRemove/>`__\ \|Устанавливает
`обработчик события <../Script/>`__ о том, что произошло удаление
элементов.\| \|\ `onMove <Collection.onMove/>`__\ \|Устанавливает
`обработчик события <../Script/>`__ о том, что произошло перемещение
элементов.\| \|\ `onReset <Collection.onReset/>`__\ \|Устанавливает
`обработчик события <../Script/>`__ о том, что произошли существенные
изменения.\| \|\ `onChange <Collection.onChange/>`__\ \|Устанавливает
`обработчик события <../Script/>`__ о том, что произошли какие-то
изменения.\|


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

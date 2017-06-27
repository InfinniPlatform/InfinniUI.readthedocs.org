LocalStorageDataSource
======================

Источник данных представления для произвольного массива.

Description
-----------

Очень часто встречаются ситуации, когда визуальное представление
оперирует предопределенным набором данных, которые необходимо хранить в local storage браузера.
Например, индивидуальные конфигурации страницы, для каждого пользователя. При решении подобных задач следует
использовать ``LocalStorageDataSource`` - он позволяет определить произвольный
массив данных, которые будут сохранены в браузере ползователя. Источник данных создается в единственном экземпляре на страницу.


Extends
-------

`ObjectDataSource <../ObjectDataSource/>`__

Syntax
------

.. code:: js

    window.InfinniUI.localStorageDataSource

Parameters
~~~~~~~~~~

Нет

.. toctree::
   :hidden:

   LocalStorageDataSource.metadata.rst


.. include:: LocalStorageDataSource.metadata.rst

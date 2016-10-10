Link.setTarget
==============

Устанавливает режим загрузки документа.

Description
-----------

Возможны следующие режимы загрузки документа:

-  blank - загружает страницу в новое окно браузера,
-  self - загружает страницу в текущее окно,
-  parent - загружает страницу во фрейм-родитель (если фреймов нет, то
   работает как self),
-  top - отменяет все фреймы и загружает страницу в полном окне браузера
   (если фреймов нет, то работает как self).

Syntax
------

.. code:: js

    Link.setTarget(value)

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - value
     - ``String``
     - Режим загрузки документа.


Returns
~~~~~~~

нет

Examples
--------

.. code:: js

    link.setTarget("blank");

See Also
--------

-  `getTarget() <Link.getTarget.html>`__

DataNavigation.onPageSizeChanged
================================

Устанавливает `обработчик события <../../../Core/Script/>`__ на событие
'onPageSizeChanged'

Description
-----------

Новое значение передаётся в параметре ``args.value``.

Syntax
------

.. code:: js

    DataNavigation.onPageSizeChanged(callback);

Parameters
~~~~~~~~~~

+-------+-------+-------------+
Name  | Type  | Description |
+=======+=======+=============+
callb | `Обра | `Обработчик |
ack   | ботчи | события <.. |
      | к     | /../../Core |
      | событ | /Script/>`_ |
      | ия <. | _           |
      | ./../ | о том, что  |
      | ../Co | размер      |
      | re/Sc | страницы    |
      | ript/ | был         |
      | >`__  | изменен.    |
+-------+-------+-------------+

Returns
~~~~~~~

Нет.

Examples
--------

.. code:: js

    DataNavigation.onPageSizeChanged(callback);

See Also
--------

-  `DataNavigation() <../DataNavigation/>`__

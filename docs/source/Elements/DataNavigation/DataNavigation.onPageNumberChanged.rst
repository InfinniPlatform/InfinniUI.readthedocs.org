DataNavigation.onPageNumberChanged
==================================

Устанавливает `обработчик события <../../../Core/Script/>`__ на событие
'onPageNumberChanged'

Description
-----------

Новое значение передаётся в параметре ``args.value``.

Syntax
------

.. code:: js

    DataNavigation.onPageNumberChanged(callback);

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
      | ../Co | номер       |
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

    DataNavigation.onPageNumberChanged(callback);

See Also
--------

-  `DataNavigation() <../DataNavigation/>`__

PasswordBox.getAutocomplete
===========================

Возвращает значение, определяющее, будет ли срабатывать стандартная
автоподстановка пароля.

Description
-----------

Syntax
------

.. code:: js

    PasswordBox.getAutocomplete()

Returns
~~~~~~~

Значение, определяющее, будет ли срабатывать стандартная автоподстановка
пароля: \* ``false`` означает, что автоподстановка сохраненных ранее
паролей происходить не будет. \* ``true`` означает, что автоподстановка
сохраненных ранее паролей будет срабатывать (поведение по умолчанию).

Examples
--------

.. code:: js

    var autocomplete = PasswordBox.getAutocomplete();

See Also
--------

-  `setAutocomplete() <PasswordBox.setAutocomplete.html>`__

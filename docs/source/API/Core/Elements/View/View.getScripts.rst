View.getScripts()
=================

Возвращает `коллекцию <../../../Collection/>`__ `скриптов
представления <../../../Script/>`__.

Syntax
------

.. code:: js

    view.getScripts()

Parameters
~~~~~~~~~~

Нет

Returns
~~~~~~~

`Коллекция <../../../Collection/>`__ скриптов представления. Каждый
элемент коллекции представлен объектом с двумя свойствами: ``name`` и
``func``. Свойство ``name`` содержит наименование скрипта, ``func`` -
указатель на `функцию скрипта <../../../Script/>`__. Использование
данных свойств подразумевает только чтение.

Examples
--------

.. code:: js

    var myScript = function() { alert('Hello!'); };

    var scripts = view.getScripts();
    scripts.add({ name: 'myScript', func: myScript });
    var myScript2 = scripts.getById('myScript'); // myScript2 === myScript

    myScript2(); // alert('Hello!');

See Also
--------

-  `Collection <../../../Collection/>`__
-  `Script <../../../Script/>`__

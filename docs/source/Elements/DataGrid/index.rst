DataGrid
========

Таблица.

Extends
-------

`ListEditorBase <../ListEditorBase/>`__

Syntax
------

.. code:: js

    new DataGrid([parent])

Parameters
~~~~~~~~~~

.. list-table::
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - ``parent``
     - `Element <../../Core/Elements/Element>`__
     - Родительский элемент


Methods
-------

+-------+-------------+
Name  | Description |
+=======+=============+
`getC | Возвращает  |
olumn | `коллекцию  |
s <Da | <../../Core |
taGri | /Collection |
d.get | />`__       |
Colum | колонок     |
ns/>` | таблицы.    |
__    |             |
+-------+-------------+
`getS | Возвращает  |
howSe | значение,   |
lecto | определяюще |
rs <D | е           |
ataGr | показывать  |
id.ge | ли колонку  |
tShow | с           |
Selec | CheckBox/Ra |
tors/ | dio         |
>`__  | для выбора  |
      | элементов.  |
+-------+-------------+
`setS | Устанавлива |
howSe | ет          |
lecto | значение,   |
rs <D | определяюще |
ataGr | е           |
id.se | показывать  |
tShow | ли колонку  |
Selec | с           |
tors/ | CheckBox/Ra |
>`__  | dio         |
      | для выбора  |
      | элементов.  |
+-------+-------------+
`getC | Возвращает  |
heckA | значение,   |
llVis | определяюще |
ible  | е           |
<Data | виден ли    |
Grid. | элемент     |
getCh | "Выбрать    |
eckAl | все" в      |
lVisi | шапке       |
ble/> | таблицы.    |
`__   |             |
+-------+-------------+
`setC | Устанавлива |
heckA | ет          |
llVis | значение,   |
ible  | определяюще |
<Data | е           |
Grid. | виден ли    |
setCh | элемент     |
eckAl | "Выбрать    |
lVisi | все" в      |
ble/> | шапке       |
`__   | таблицы.    |
+-------+-------------+
`getC | Возвращает  |
heckA | состояние   |
ll <D | элемента    |
ataGr | "Выбрать    |
id.ge | все" из     |
tChec | шапки       |
kAll/ | таблицы.    |
>`__  |             |
+-------+-------------+

Events
------

+-------+-------------+
Name  | Description |
+=======+=============+
`onCh | Устанавлива |
eckAl | ет          |
lChan | `обработчик |
ged < | события <.. |
DataG | /../Core/Sc |
rid.o | ript/>`__   |
nChec | о том, что  |
kAllC | состоняие   |
hange | элемента    |
d/>`_ | "Выбрать    |
_     | все" в      |
      | шапке       |
      | таблицы     |
      | изменилось. |
+-------+-------------+
`onRo | Устанавлива |
wClic | ет          |
k <Da | `обработчик |
taGri | события <.. |
d.onR | /../Core/Sc |
owCli | ript/>`__   |
ck/>` | на клик по  |
__    | элементам   |
      | DataGrid.   |
+-------+-------------+
`onRo | Устанавлива |
wDoub | ет          |
leCli | `обработчик |
ck <D | события <.. |
ataGr | /../Core/Sc |
id.on | ript/>`__   |
RowDo | на двойной  |
ubleC | клик по     |
lick/ | элементам   |
>`__  | DataGrid.   |
+-------+-------------+

Culture
=======

Культура (языковые и региональные настройки).

Культура предоставляет сведения о наименовании культуры, а также о
формате представления значений для различных типов данных.

Properties
----------

+-------+-------+-------------+
Name  | Type  | Description |
+=======+=======+=============+
name  | ``Str | `Наименован |
      | ing`` | ие          |
      |       | культуры <h |
      |       | ttp://tools |
      |       | .ietf.org/h |
      |       | tml/rfc5646 |
      |       | >`__.       |
+-------+-------+-------------+
capti | ``Str | Отображаемо |
on    | ing`` | е           |
      |       | наименовани |
      |       | е           |
      |       | культуры.   |
+-------+-------+-------------+
dateT | `Date | Сведения о  |
imeFo | TimeF | формате     |
rmatI | ormat | представлен |
nfo   | Info  | ия          |
      | <Cult | даты и      |
      | ure.d | времени.    |
      | ateTi |             |
      | meFor |             |
      | matIn |             |
      | fo/>` |             |
      | __    |             |
+-------+-------+-------------+
numbe | `Numb | Сведения о  |
rForm | erFor | формате     |
atInf | matIn | представлен |
o     | fo <C | ия          |
      | ultur | числовых    |
      | e.num | значений.   |
      | berFo |             |
      | rmatI |             |
      | nfo/> |             |
      | `__   |             |
+-------+-------+-------------+


.. toctree::

   Culture.dateTimeFormatInfo.rst
   Culture.dateTimeFormatting.rst
   Culture.numberFormatInfo.rst
   Culture.numberFormatting.rst

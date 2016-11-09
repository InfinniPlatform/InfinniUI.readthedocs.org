BaseDataSource.onProviderErrorHandler
=====================================

Возвращает `обработчик события <../../Script/>`_ о том, что `поставщик данных </Core/DataProviders/>`_ вернул ошибку. Свойство предназначено только для чтения.

Syntax
------

.. code:: js

    BaseDataSource.onProviderErrorHandler

Returns
~~~~~~~

`Обработчик события <../../Script/>`_ о том, что `поставщик данных </Core/DataProviders/>`_ вернул ошибку.

Examples
--------

.. code:: js

	var oldOnProviderErrorHandler = BaseDataSource.onProviderErrorHandler;
	BaseDataSource.onProviderError(function(context, args){
		if( oldOnProviderErrorHandler instanceof Function ) {
			oldOnProviderErrorHandler(context, args);
		}
		newOnProviderErrorHandler(context, args);
	});

See Also
--------

-  `onProviderError() <BaseDataSource.onProviderError.html>`_

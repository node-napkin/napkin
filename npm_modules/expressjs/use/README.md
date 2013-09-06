I don't really know what pattern this is, but it allows you to define endpoints as required modules.

One problem is that it bypasses the routes list, but is useful if you want to easily break out your endpoints
into different module folders.

It also allows you to easily define middleware to grouping of endpoints like /auth or /napkin
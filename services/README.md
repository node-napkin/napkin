A compilation of services that I have come to use for various tasks, both cloud based and server related. In addition to services/frameworks that I might want to use in the future.  The majority of these services are for use with Nodejs related application, but some services can also work with other languages as well.

## Table of contents

1. [Inbound mail processing](#inbound-mail-processing)
1. [Load Testing](#load-testing)
1. [Applicaton Monitoring](#application-monitoring)
1. [Databases](#databases)
1. [Log Aggregation](#log-aggregation)
1. [Search](#search)
1. [Code Coverage](#code-coverage)

## Inbound mail processing
1. [Mailgun](http://mailgun.com)
1. [Postmarkapp](https://postmarkapp.com/inbound)
1. [Cloudmailin](http://www.cloudmailin.com/)


## Load Testing
1. [Flood.io](https://flood.io/)
1. [Siege](http://www.joedog.org/siege-home/)
1. [Vegeta](https://github.com/tsenart/vegeta)
1. [Gatling](http://gatling-tool.org/)

## Application Monitoring
1. [Newrelic](http://newrelic.com)
  - Even if you don't have any money, you can still benefit from their free account!

## Databases
### NoSQL
1. [Couchbase](http://www.couchbase.com) Very fast and easily scales horrizontally.
1. [Mogodb](http://mongodb.com) Master/Slave replication, lots of articles out there as to why you shouldn't use it. You decide.

### Relational
1. [MySQL](http://mysql.com)
1. [PostgreSQL](http://www.postgresql.org/)
1. [FoundationDB](https://foundationdb.com)

## Log aggregation
### Cloud-based
1. [Rollbar](http://www.rollbar.com) 
  - Focuses primarily on error logs, but can also agregate other messaging levels too.
  - Message throttling via nextTick or setInterval callback settings.
  - Global error handler setup
  - Express/Connect middleware
1. [Airbrake](http://airbrake.io/) Boasts high throughput with a sparkly UI
  - Poor documentation if any.
  - Says you can sign up for a free account, accept there are no links to the free account.
  - Free account signup located here: https://airbrake.io/account/new/Free
  - Nodejs integration not in the knowledge base, need to search npm. https://npmjs.org/package/airbrake
1. [Loggly](http://loggly.com) Not the biggest fan of this service, UI and message search is slow.

### Self managed
1. [Logstash](http://logstash.net/) Combine with the latest version of kibana and you really got something here

## Search
1. [Elasticsearch](http://elasticsearch.org) I'm not sure what I would do without it

## Code coverage
### Javascript
1. [Istanbul](http://gotwarlost.github.io/istanbul/)
  - Without tests you will fail, without knowing what your testing, you will also fail!  Test, test, and get a coverage report!

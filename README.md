# Simulated Traffic Telemetry Demo
A Node.js/Express framework, running on Google App Engine, to:
1. Simulate traffic speed data from Node as HTTP requests
2. Poll a public API from the City of Chicago to pull down data every 15 minutes and push it to a Pub/Sub topic

Includes a cron.yaml file to specify which URLs to call and how often. To adjust how many messages get generated per call, use the "generate" request parameter (i.e. "?generate=600" generates 600 messages)

# Sample jBPM connector

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A connector service for interacting with jBPM

## Table of Contents

- [Build](#Build)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Build

### Adding Unit Tests

Unit tests should be added to the same directory of the test target file. It should have a prefix with "test_". To run all the tests:

```bash
grunt unit
```

### Running Acceptance Tests

In order to run the acceptance tests, you will need to have jBPM running somewhere. Refer to [Docker](#Docker) for more details.

You also need to set the process environments: 

```bash
export JBPM_IP= #jBPM host's IP address
export JBPM_PORT= #jBPM port
export JBPM_USERNAME= #Your jBPM username
export JBPM_PASSWORD= #Your jBPM password
```

Finally, you can run the acceptance tests:

```bash
grunt accept
```

#### Docker

If you have [docker](https://www.docker.com/), you can initialise a jBPM instance configured to run acceptance tests against.

```bash
$ docker run -ti -p 8080:8080 fabric8/fabric8-jbpm-designer
```

## Usage

To start the service, run

```bash
node application.js
```

## API
This connector forwards your requests to jBPM so you can use jBPM's API. You only have to prepend the endpoints with `jbpm`, e.g. `http://host:port/jbpm/rest/history/instances`

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © RedHat
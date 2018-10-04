.PHONY: all
all: test

.PHONY: test
test:
	tox

# Deploys package to the App Engine
.PHONY: deploy
deploy:
	gcloud app --project

# build stage
.PHONY: stage
stage:
	./node_modules/.bin/webpack --config webpack.stage.config.js

# build prod
.PHONY: prod
prod:
	./node_modules/.bin/webpack --config webpack.prod.config.js

.PHONY: clean
clean:
	@find . -name '*.pyc' -delete

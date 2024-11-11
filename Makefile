setup:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
test:
	npm test
gendiff:
	node bin/gendiff.js
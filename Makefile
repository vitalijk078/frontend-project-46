install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
test:
	npm run test -- --coverage
gendiff:
	node bin/gendiff.js


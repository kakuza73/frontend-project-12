make build:
	npm run build

make start:
	npx start-server -s ./frontend/dist

make install:
	npm ci
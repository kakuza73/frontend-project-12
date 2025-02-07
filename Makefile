make build:
	npm run build --prefix frontend

make start:
	npx serve -s frontend/dist -l 3000

make install:
	npm ci


# Runs tests in short mode, without database adapters
.PHONY: hydra
hydra:
		mv src/pages/404.tsx src/build/
		mv src/pages/hydra.tsx src/build/
		rm src/pages/*
		mv src/build/* src/pages/
		mv src/pages/hydra.tsx src/pages/index.tsx
		GATSBY_DOMAIN=gethydra.sh npm run build

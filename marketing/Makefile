run:
	docker build -f ./Dockerfile -t retrospected/marketing:local ./
	docker run --env NEXT_PUBLIC_MEASUREMENT_ID=G-BLAH -it --rm -p 3333:3000 retrospected/marketing:local
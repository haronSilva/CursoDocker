FROM debian
LABEL maintainer 'Aluno Cod3r'

ARG S3_BUCKET=files
#Para receber os argumentos de fora
ENV S3_BUCKET= ${S3_BUCKET}

#docker image build  -t ex-build-arg .
#Testando: docker container run ex-build-arg bash -c 'echo $S3_BUCKET'
#Passando um argumento: docker image build --build-arg S3_BUCKET=myapp -t ex-build-arg

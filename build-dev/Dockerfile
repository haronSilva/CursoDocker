FROM python:3.6
LABEL maintainer 'Aluno cod3er'

#Comandos concatenados no RUN

RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

USER www
VOLUME /log
#Diretorio usado para executar a tag CMD
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]

#Executando o container mapeando um volumeto e rodando no modo iterativo
# docker container run -it -v $(pwd):/app -p 90:8000 --name python-server ex-build-dev
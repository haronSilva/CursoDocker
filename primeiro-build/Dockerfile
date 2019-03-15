#A instrução FROM configura de qual imagem você deve se basear
FROM nginx:latest
# Executar o comando jogando a instrução echo no index.html
RUN echo '<h1>Hello World</h1>' > /usr/share/nginx/html/index.html

#OBS: Primeira layer criada será a do nginx e depois a que está no comando RUN.

#Executando a criação da imagem: docker image build -t ex-simple-build .
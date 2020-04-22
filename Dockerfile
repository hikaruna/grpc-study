FROM buildpack-deps as protoc-builder

WORKDIR /tmp
RUN curl -sSL https://github.com/protocolbuffers/protobuf/releases/download/v3.8.0/\
protoc-3.8.0-linux-x86_64.zip -o protoc.zip && \
  unzip -qq protoc.zip && \
  cp ./bin/protoc /usr/local/bin/protoc
RUN curl -sSL https://github.com/grpc/grpc-web/releases/download/1.0.7/\
protoc-gen-grpc-web-1.0.7-linux-x86_64 -o /usr/local/bin/protoc-gen-grpc-web && \
  chmod +x /usr/local/bin/protoc-gen-grpc-web

FROM node:lts as protoc-builder-node
WORKDIR /tmp
RUN yarn add grpc-tools grpc_tools_node_protoc_ts

FROM debian:9 as protoc
COPY --from=protoc-builder /tmp/bin/protoc /usr/local/bin/protoc
COPY --from=protoc-builder /usr/local/bin/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web
COPY --from=protoc-builder-node /tmp/node_modules/.bin/grpc_tools_node_protoc_plugin /usr/local/bin/grpc_tools_node_protoc_plugin

ENTRYPOINT [ "protoc" ]
CMD [ "--help" ]

FROM node:lts as grpc_tools_node_protoc_ts
RUN yarn global add grpc-tools grpc_tools_node_protoc_ts

CMD [ "grpc_tools_node_protoc" ]

FROM node:lts as ts-protoc-gen
RUN yarn global add grpc-tools ts-protoc-gen

CMD [ "grpc_tools_node_protoc" ]
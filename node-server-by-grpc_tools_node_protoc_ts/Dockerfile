FROM node:lts as protoc
RUN yarn global add grpc-tools grpc_tools_node_protoc_ts
ENTRYPOINT [ "grpc_tools_node_protoc" ]
CMD [ "-h" ]
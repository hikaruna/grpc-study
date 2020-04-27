FROM node as core-build
WORKDIR /app
COPY core/package.json ./
COPY core/yarn.lock ./
RUN yarn install --production


FROM node as chatd-build
WORKDIR /app
COPY node-server-by-grpc_tools_node_protoc_ts/package.json ./
COPY node-server-by-grpc_tools_node_protoc_ts/yarn.lock ./
RUN yarn install --production


FROM node as chatd
WORKDIR /app/core
COPY core ./
COPY --from=core-build /app/node_modules ./node_modules
RUN yarn link

WORKDIR /app/node-server-by-grpc_tools_node_protoc_ts
COPY node-server-by-grpc_tools_node_protoc_ts ./
COPY --from=chatd-build /app/node_modules ./node_modules
RUN yarn link @chat/core
RUN yarn link
ENTRYPOINT [ "npm",  "start", "--" ]


FROM node as chat-build
WORKDIR /app
COPY node-client-by-grpc_tools_node_protoc_ts/package.json ./
COPY node-client-by-grpc_tools_node_protoc_ts/yarn.lock ./
RUN yarn install --production


FROM node as chat
WORKDIR /app
COPY node-client-by-grpc_tools_node_protoc_ts ./
COPY --from=chat-build /app/node_modules ./node_modules
RUN yarn install --production
RUN yarn link
ENTRYPOINT [ "chat" ]
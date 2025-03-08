# Deploy

## Weather service

### Build & Push app to registry

```sh
quarkus build \
    -Dquarkus.container-image.push=true \
    -Dquarkus.container-image.username=$REGISTRY_USER \
    -Dquarkus.container-image.password=$REGISTRY_PASSWORD \
    -Dquarkus.container-image.registry=$REGISTRY_HOST \
    -Dquarkus.container-image.group=$IMAGE_GROUP$ \
    -Dquarkus.container-image.tag=$IMAGE_TAG$ \
    -Dquarkus.security.users.embedded.users.space-suit-back=$API_ACCESS_PASSWORD
```

### Deploy to Kubernetes

```sh
quarkus deploy kubernetes \
    -Dquarkus.container-image.username=$REGISTRY_USER \
    -Dquarkus.container-image.password=$REGISTRY_PASSWORD \
    -Dquarkus.kubernetes.generate-image-pull-secret=true
```

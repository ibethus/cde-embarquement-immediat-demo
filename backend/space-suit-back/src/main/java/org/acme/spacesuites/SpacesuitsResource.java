package org.acme.spacesuites;

import java.util.List;
import java.util.UUID;

import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;
import io.quarkus.panache.common.Page;
import io.quarkus.panache.common.Sort;
import io.quarkus.rest.data.panache.ResourceProperties;
import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.Produces;

@DenyAll
@ResourceProperties
public interface SpacesuitsResource extends PanacheEntityResource<Spacesuits, UUID> {

    @RolesAllowed("user")
    List<Spacesuits> list(Page page, Sort sort);

    @RolesAllowed("user")
    long count();

    @RolesAllowed("user")
    Spacesuits get(UUID id);

    @RolesAllowed("maintainer")
    Spacesuits add(Spacesuits entity);

    @RolesAllowed("maintainer")
    @Produces("application/json")
    Spacesuits update(UUID id, Spacesuits entity);

    @RolesAllowed("maintainer")
    boolean delete(UUID id);
}
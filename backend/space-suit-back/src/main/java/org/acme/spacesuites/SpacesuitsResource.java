package org.acme.spacesuites;

import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;

import java.util.UUID;

public interface SpacesuitsResource extends PanacheEntityResource<Spacesuits, UUID> {
}
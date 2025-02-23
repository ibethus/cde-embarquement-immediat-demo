package org.acme.spacesuites.validation;

import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import org.acme.spacesuites.Spacesuits;

import java.util.UUID;

@DenyAll
@Path("/spacesuits")
public class SpaceSuitsValidationController {

    @Inject
    SpaceSuitsValidationService spaceSuitsValidationService;

    @GET
    @Path("{id}/validate")
    @Produces("application/json")
    @RolesAllowed("user")
    public SpaceSuiteValidation validate(@PathParam("id") UUID id) {
        return spaceSuitsValidationService.checkSpaceSuit(Spacesuits.findById(id), "Earth", 0.0, 0.0);
    }
}

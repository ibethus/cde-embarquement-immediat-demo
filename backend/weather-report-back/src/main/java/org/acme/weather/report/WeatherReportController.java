package org.acme.weather.report;

import jakarta.annotation.security.DenyAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.QueryParam;
import org.acme.weather.planet.Coordinates;
import org.acme.weather.planet.PlanetPosition;

@DenyAll
@Path("")
public class WeatherReportController {

    @Inject
    WeatherReportService weatherReportService;

    @GET
    @Path("/planets/{planetName}/weather")
    @RolesAllowed("user")
    public WeatherConditions getWeatherRport(@PathParam("planetName") String planetName,
                                             @QueryParam("latitude") double latitude,
                                             @QueryParam("longitude") double longitude) {
        return weatherReportService.getWeatherReport(new PlanetPosition(planetName, new Coordinates(latitude, longitude)));
    }
}
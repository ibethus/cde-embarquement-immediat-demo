package org.acme.weather.report;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.acme.weather.atmosphere.AtmosphereGenerator;
import org.acme.weather.planet.PlanetPosition;
import java.util.Random;

@ApplicationScoped
public class WeatherReportService {

    @Inject
    AtmosphereGenerator atmosphereGenerator;

    private final Random random = new Random();

    public WeatherConditions getWeatherReport(PlanetPosition planetPosition) {
        return new WeatherConditions(planetPosition.planetName(),
                planetPosition.coordinates(),
                randomDouble(-200, 200),
                randomDouble(0, 100),
                randomDouble(0, 200),
                atmosphereGenerator.generateAtmosphere(),
                java.time.Instant.now());
    }

    private double randomDouble(double min, double max) {
        return Math.round(random.nextDouble(min, max) * 100) / 100D;
    }
}

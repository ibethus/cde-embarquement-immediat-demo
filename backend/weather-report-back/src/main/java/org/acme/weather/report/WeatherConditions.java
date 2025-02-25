package org.acme.weather.report;

import org.acme.weather.planet.Coordinates;
import org.acme.weather.atmosphere.Atmosphere;

import java.time.Instant;

public record WeatherConditions(String planetName,
        Coordinates coordinates,
        double celsiusTemperature,
        double barPressure,
        double kmhWindSpeed,
        Atmosphere atmosphere,
        Instant timestamp) {
}

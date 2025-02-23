package org.acme.weather.atmosphere;

import java.util.List;

public record Atmosphere(List<AtmosphereComposition> composition, double density) {
}

package org.acme.spacesuites.validation.validators;

import jakarta.enterprise.context.ApplicationScoped;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

@ApplicationScoped
public class SpaceSuitOxygenValidator implements SpaceSuitValidator {

    private static final double MIN_OXYGEN_LEVEL = 60;

    @Override
    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, WeatherReportService.WeatherConditions weatherConditions) {
        return new SpaceSuiteValidation(spaceSuit.oxygenLevel > MIN_OXYGEN_LEVEL,
                "Le niveau d'oxygène est : " + spaceSuit.oxygenLevel + " % (> " + MIN_OXYGEN_LEVEL + ")");
    }
}

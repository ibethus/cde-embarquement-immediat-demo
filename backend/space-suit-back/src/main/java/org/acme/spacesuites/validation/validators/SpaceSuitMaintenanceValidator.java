package org.acme.spacesuites.validation.validators;

import jakarta.enterprise.context.ApplicationScoped;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

import java.time.Instant;

@ApplicationScoped
public class SpaceSuitMaintenanceValidator implements SpaceSuitValidator {

    @Override
    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, WeatherReportService.WeatherConditions weatherConditions) {
        return new SpaceSuiteValidation(spaceSuit.nextMaintenanceDate != null && spaceSuit.nextMaintenanceDate.isAfter(Instant.now()), "Dernière date de maintenance : " + spaceSuit.lastMaintenanceDate);
    }
}

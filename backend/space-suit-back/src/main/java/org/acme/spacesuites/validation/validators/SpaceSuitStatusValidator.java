package org.acme.spacesuites.validation.validators;

import org.acme.spacesuites.SpacesuitesStatus;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SpaceSuitStatusValidator implements SpaceSuitValidator {

    @Override
    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit,
            WeatherReportService.WeatherConditions weatherConditions) {
        return new SpaceSuiteValidation(spaceSuit.status == SpacesuitesStatus.OPERATIONNEL,
                "Statut : " + spaceSuit.status);
    }
}

package org.acme.spacesuites.validation.validators;

import jakarta.enterprise.context.ApplicationScoped;
import org.acme.spacesuites.SpacesuitesStatus;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

import java.util.List;

@ApplicationScoped
public class SpaceSuitStatusValidator implements SpaceSuitValidator {

    @Override
    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, WeatherReportService.WeatherConditions weatherConditions) {
        return new SpaceSuiteValidation(spaceSuit.status == SpacesuitesStatus.OPERATIONNEL, "Status is : " + spaceSuit.status);
    }
}

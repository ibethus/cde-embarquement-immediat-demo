package org.acme.common;

import jakarta.persistence.Embeddable;

@Embeddable
public class TemperatureRange {
    public double min;
    public double max;
}

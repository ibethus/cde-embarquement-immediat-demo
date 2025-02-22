package org.acme.spacesuites;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import org.acme.TemperatureRange;

import java.time.Instant;
import java.util.UUID;

@Entity
public class Spacesuits extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    public UUID id;
    public String serialNumber;
    public SpacesuitesStatus status;
    public double oxygenLevel;
    public double batteryLevel;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name="min", column=@Column(name="temperature_min")),
            @AttributeOverride(name="max", column=@Column(name="temperature_max"))
    })
    public TemperatureRange temperatureRange;
    public Instant lastMaintenanceDate;
    public Instant nextMaintenanceDate;
}


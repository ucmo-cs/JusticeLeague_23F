package com.example.ChangeManage.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Optional;
import javax.persistence.GeneratedValue;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class ChangeRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer changeId;
    private String applicationId;
    private String description;
    private String reason;
    private Integer reasonNumber;
    private String changeType;
    private String whyDescription;
    private String whatDescription;
    private String backOutPlan;
    private String backOutMinutes;
    private String changeWindowStartDate;
    private String changeWindowStopDate;
    private String changeWindowStartTime;
    private String changeWindowStopTime;
    private String otherNeededDepartments;
    private String riskLevel;
    private String implementer;
    private String implementationStatus;
    private String implementationDate; // Must be between changeWindow Start and Stop Date/Time
    private String implementationTime;
    private String stateLevel; // Approval State level; Open, Frozen, Application, Department, Approved, Denied, Completed
    private Boolean archivedStatus; // If it is Archived or not

    @ManyToOne
    @JoinColumn(name = "id")
    private CMUser user;



}

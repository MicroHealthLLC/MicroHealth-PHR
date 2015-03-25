
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutCarePlanStatus
 *  07/14/2013 11:01:41
 * 
 */
public class LutCarePlanStatus {

    private Integer CarePlanStatsID;
    private String CarePlanStatus;
    private Set<com.phr.data.CarePlan> careplans = new HashSet<com.phr.data.CarePlan>();

    public Integer getCarePlanStatsID() {
        return CarePlanStatsID;
    }

    public void setCarePlanStatsID(Integer CarePlanStatsID) {
        this.CarePlanStatsID = CarePlanStatsID;
    }

    public String getCarePlanStatus() {
        return CarePlanStatus;
    }

    public void setCarePlanStatus(String CarePlanStatus) {
        this.CarePlanStatus = CarePlanStatus;
    }

    public Set<com.phr.data.CarePlan> getCareplans() {
        return careplans;
    }

    public void setCareplans(Set<com.phr.data.CarePlan> careplans) {
        this.careplans = careplans;
    }

}

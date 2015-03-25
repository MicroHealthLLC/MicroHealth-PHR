
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutRadiologyFlag
 *  07/14/2013 10:59:51
 * 
 */
public class LutRadiologyFlag {

    private Integer RadiologyFlagID;
    private String RadiologyFlag;
    private Set<com.phr.data.Radiology> radiologies = new HashSet<com.phr.data.Radiology>();

    public Integer getRadiologyFlagID() {
        return RadiologyFlagID;
    }

    public void setRadiologyFlagID(Integer RadiologyFlagID) {
        this.RadiologyFlagID = RadiologyFlagID;
    }

    public String getRadiologyFlag() {
        return RadiologyFlag;
    }

    public void setRadiologyFlag(String RadiologyFlag) {
        this.RadiologyFlag = RadiologyFlag;
    }

    public Set<com.phr.data.Radiology> getRadiologies() {
        return radiologies;
    }

    public void setRadiologies(Set<com.phr.data.Radiology> radiologies) {
        this.radiologies = radiologies;
    }

}

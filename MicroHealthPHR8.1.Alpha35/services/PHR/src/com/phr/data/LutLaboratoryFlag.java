
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutLaboratoryFlag
 *  07/14/2013 11:00:25
 * 
 */
public class LutLaboratoryFlag {

    private Integer LaboratoryFlagID;
    private String LaboratoryFlag;
    private Set<com.phr.data.Laboratory> laboratories = new HashSet<com.phr.data.Laboratory>();

    public Integer getLaboratoryFlagID() {
        return LaboratoryFlagID;
    }

    public void setLaboratoryFlagID(Integer LaboratoryFlagID) {
        this.LaboratoryFlagID = LaboratoryFlagID;
    }

    public String getLaboratoryFlag() {
        return LaboratoryFlag;
    }

    public void setLaboratoryFlag(String LaboratoryFlag) {
        this.LaboratoryFlag = LaboratoryFlag;
    }

    public Set<com.phr.data.Laboratory> getLaboratories() {
        return laboratories;
    }

    public void setLaboratories(Set<com.phr.data.Laboratory> laboratories) {
        this.laboratories = laboratories;
    }

}

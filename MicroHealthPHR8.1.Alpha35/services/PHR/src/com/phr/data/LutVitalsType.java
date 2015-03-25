
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutVitalsType
 *  07/14/2013 10:59:32
 * 
 */
public class LutVitalsType {

    private Integer VitalsTypeID;
    private String VitalsType;
    private Set<com.phr.data.Vitals> vitalss = new HashSet<com.phr.data.Vitals>();

    public Integer getVitalsTypeID() {
        return VitalsTypeID;
    }

    public void setVitalsTypeID(Integer VitalsTypeID) {
        this.VitalsTypeID = VitalsTypeID;
    }

    public String getVitalsType() {
        return VitalsType;
    }

    public void setVitalsType(String VitalsType) {
        this.VitalsType = VitalsType;
    }

    public Set<com.phr.data.Vitals> getVitalss() {
        return vitalss;
    }

    public void setVitalss(Set<com.phr.data.Vitals> vitalss) {
        this.vitalss = vitalss;
    }

}

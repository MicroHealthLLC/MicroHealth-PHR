
package com.phr.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  PHR.LutProblemType
 *  07/14/2013 11:00:03
 * 
 */
public class LutProblemType {

    private Integer ProblemTypeID;
    private String ProblemType;
    private Set<com.phr.data.Problems> problemss = new HashSet<com.phr.data.Problems>();

    public Integer getProblemTypeID() {
        return ProblemTypeID;
    }

    public void setProblemTypeID(Integer ProblemTypeID) {
        this.ProblemTypeID = ProblemTypeID;
    }

    public String getProblemType() {
        return ProblemType;
    }

    public void setProblemType(String ProblemType) {
        this.ProblemType = ProblemType;
    }

    public Set<com.phr.data.Problems> getProblemss() {
        return problemss;
    }

    public void setProblemss(Set<com.phr.data.Problems> problemss) {
        this.problemss = problemss;
    }

}

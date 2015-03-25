
package com.phr;

import java.util.List;
import com.phr.data.output.GetAllergyTitleRtnType;
import com.phr.data.output.GetCarePlanGraphRtnType;
import com.phr.data.output.GetJournalGraphRtnType;
import com.phr.data.output.GetJournalTitleRtnType;
import com.phr.data.output.GetLabsGraphRtnType;
import com.phr.data.output.GetLabsListRtnType;
import com.phr.data.output.GetMedicationListRtnType;
import com.phr.data.output.GetProblemListRtnType;
import com.phr.data.output.GetVitalsGraphRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "PHR"
 *  07/18/2013 21:17:10
 * 
 */
@SuppressWarnings("unchecked")
public class PHR
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetVitalsGraphRtnType> getVitalsGraph(Integer userid, Integer vitalstypeID, PagingOptions pagingOptions) {
        return ((List<GetVitalsGraphRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getVitalsGraphQueryName), userid, vitalstypeID, pagingOptions));
    }

    public Integer deleteDocumentFiles(Integer documentid, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.deleteDocumentFilesQueryName), documentid, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetJournalTitleRtnType> getJournalTitle(Integer UserID, PagingOptions pagingOptions) {
        return ((List<GetJournalTitleRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getJournalTitleQueryName), UserID, pagingOptions));
    }

    public List<GetLabsGraphRtnType> getLabsGraph(Integer userid, String laboratorytest, PagingOptions pagingOptions) {
        return ((List<GetLabsGraphRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getLabsGraphQueryName), userid, laboratorytest, pagingOptions));
    }

    public List<GetCarePlanGraphRtnType> getCarePlanGraph(Integer userid, PagingOptions pagingOptions) {
        return ((List<GetCarePlanGraphRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getCarePlanGraphQueryName), userid, pagingOptions));
    }

    public List<GetLabsListRtnType> getLabsList(Integer UserID, PagingOptions pagingOptions) {
        return ((List<GetLabsListRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getLabsListQueryName), UserID, pagingOptions));
    }

    public Integer deleteFiles(String PathInput, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.deleteFilesQueryName), PathInput, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetMedicationListRtnType> getMedicationList(Integer UserID, PagingOptions pagingOptions) {
        return ((List<GetMedicationListRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getMedicationListQueryName), UserID, pagingOptions));
    }

    public List<GetProblemListRtnType> getProblemList(Integer UserID, PagingOptions pagingOptions) {
        return ((List<GetProblemListRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getProblemListQueryName), UserID, pagingOptions));
    }

    public List<GetJournalGraphRtnType> getJournalGraph(Integer userid, PagingOptions pagingOptions) {
        return ((List<GetJournalGraphRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getJournalGraphQueryName), userid, pagingOptions));
    }

    public List<GetAllergyTitleRtnType> getAllergyTitle(Integer UserID, PagingOptions pagingOptions) {
        return ((List<GetAllergyTitleRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (PHRConstants.getAllergyTitleQueryName), UserID, pagingOptions));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}

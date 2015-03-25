
package gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth;

import java.util.HashMap;
import java.util.Map;
import javax.xml.namespace.QName;
import com.wavemaker.runtime.ws.BindingProperties;
import com.wavemaker.runtime.ws.RESTService;


/**
 *  Operations for service "nlmMedlinePlusHealth"
 *  07/17/2013 19:24:15
 * 
 */
public class NlmMedlinePlusHealth {

    public java.lang.String serviceId = "nlmMedlinePlusHealth";
    private QName nlmMedlinePlusHealthQName = new QName("http://wsearch.nlm.nih.gov/ws/query", "nlmMedlinePlusHealth");
    private BindingProperties bindingProperties;
    private java.lang.String parameterizedURI = "http://wsearch.nlm.nih.gov/ws/query?db={db}&term={term}";
    private RESTService restService;

    public NlmMedlinePlusHealth() {
        restService = new RESTService(serviceId, nlmMedlinePlusHealthQName, parameterizedURI);
    }

    public gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth.NlmSearchResult invoke(java.lang.String db, java.lang.String term) {
        Map<String, Object> urlParams = new HashMap<String, Object>();
        Map<String, Object> headerParams = new HashMap<String, Object>();
        urlParams.put("db", db);
        urlParams.put("term", term);
        restService.setBindingProperties(bindingProperties);
        NlmSearchResult result = restService.invoke(urlParams, gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth.NlmSearchResult.class, headerParams);
        return ((NlmSearchResult) result);
    }

    public BindingProperties getBindingProperties() {
        return bindingProperties;
    }

    public void setBindingProperties(BindingProperties bindingProperties) {
        this.bindingProperties = bindingProperties;
    }

}

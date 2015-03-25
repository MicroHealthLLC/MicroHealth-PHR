
package gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth;

import javax.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {


    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: gov.nih.nlm.wsearch.ws.query.nlmmedlineplushealth
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link NlmSearchResult }
     * 
     */
    public NlmSearchResult createNlmSearchResult() {
        return new NlmSearchResult();
    }

    /**
     * Create an instance of {@link ListTypeType }
     * 
     */
    public ListTypeType createListTypeType() {
        return new ListTypeType();
    }

    /**
     * Create an instance of {@link DocumentTypeType }
     * 
     */
    public DocumentTypeType createDocumentTypeType() {
        return new DocumentTypeType();
    }

    /**
     * Create an instance of {@link ContentTypeType }
     * 
     */
    public ContentTypeType createContentTypeType() {
        return new ContentTypeType();
    }

}

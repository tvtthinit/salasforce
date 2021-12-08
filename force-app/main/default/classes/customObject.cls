public with sharing class customObject {
    @AuraEnabled(cacheable=true)
    public static List<customeABC__c> getListObjCustom(){
        return [
            SELECT Id,title__c, LastModifiedById, LastViewedDate, Name
            FROM customeABC__c
            LIMIT 10
        ];
    }
    public customObject() {

    }
    
}

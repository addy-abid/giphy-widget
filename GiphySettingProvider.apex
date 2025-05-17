public class GiphySettingProvider {
    @AuraEnabled(cacheable=true)
    public static String getApiKey() {
        return Giphy_API__mdt.getInstance('Giphy').API_Key__c;
	}
}

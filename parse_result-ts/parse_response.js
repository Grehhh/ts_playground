function parseResult(result) {
    return {
        statusMessage: result.Results[0].StatusMessage,
        requestID: result.RequestID
    };
}
var result = {
    "Results": [
        {
            "StatusCode": "OK",
            "StatusMessage": "Updated DataExtensionObject",
            "OrdinalID": "0",
            "Object": {
                "PartnerKey": "",
                "ObjectID": "",
                "CustomerKey": "9C80C764-98A9-44C5-B377-E9763E405C76",
                "Properties": {
                    "Property": [
                        {
                            "Name": "ConsumerKey",
                            "Value": "gmarengo+test1613@practicalmarketing.es"
                        },
                        {
                            "Name": "Email_Address",
                            "Value": "gmarengo+test1613@practicalmarketing.es"
                        },
                        {
                            "Name": "Acquisition_Module",
                            "Value": "Landing - Campaign Specific"
                        },
                        {
                            "Name": "Birthday",
                            "Value": "2012-7-14T00:00:00"
                        },
                        {
                            "Name": "First_Name",
                            "Value": "Alice"
                        },
                        {
                            "Name": "Last_Name",
                            "Value": "Smith"
                        },
                        {
                            "Name": "Subscriber_Email",
                            "Value": "true"
                        },
                        {
                            "Name": "Channel_Acquisition_Module",
                            "Value": "Web"
                        },
                        {
                            "Name": "Campaign",
                            "Value": "Campaña global de Melanoma"
                        },
                        {
                            "Name": "Traffic_Source",
                            "Value": "BRA_AR_SocPa_NA_W_MMR_SumSH21_TRAF_GANASDESOL_2200_NA"
                        },
                        {
                            "Name": "Email_Hash",
                            "Value": "0195105520a9252977fc8fa7c28e1874"
                        },
                        {
                            "Name": "Platform_Register",
                            "Value": "true"
                        },
                        {
                            "Name": "Phone_Number",
                            "Value": "1234567890"
                        },
                        {
                            "Name": "Locale",
                            "Value": "en-US"
                        },
                        {
                            "Name": "Dermo",
                            "Value": "false"
                        },
                        {
                            "Name": "URL",
                            "Value": "https://www.isdin.com/"
                        },
                        {
                            "Name": "Profiling",
                            "Value": "true"
                        },
                        {
                            "Name": "UUI",
                            "Value": "18f12066-d31c-4b09-a872-8092df2ca18d"
                        },
                        {
                            "Name": "Country",
                            "Value": "CO"
                        },
                        {
                            "Name": "Language",
                            "Value": "de"
                        },
                        {
                            "Name": "Opt_In_Date",
                            "Value": "11/30/2023 1:00:00 AM"
                        },
                        {
                            "Name": "Opt_Out_Date",
                            "Value": ""
                        },
                        {
                            "Name": "Creation_Date",
                            "Value": "11/28/2023 9:13:19 AM"
                        },
                        {
                            "Name": "Subscriber_SMS",
                            "Value": "true"
                        },
                        {
                            "Name": "Opt_In_Date_SMS",
                            "Value": "11/28/2023 9:13:19 AM"
                        },
                        {
                            "Name": "Opt_Out_Date_SMS",
                            "Value": ""
                        },
                        {
                            "Name": "Platform_Register_Date",
                            "Value": "7/14/2012 1:00:00 AM"
                        },
                        {
                            "Name": "Platform_Unregister_Date",
                            "Value": ""
                        }
                    ]
                }
            }
        }
    ],
    "RequestID": "1e1dda31-a38b-441c-a71d-c3b3d05db7b4",
    "OverallStatus": "OK"
};
console.log(parseResult(result));

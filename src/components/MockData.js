export const statusData =
    [
    {
        id:1,
        parent:"User" ,
        pods:
        [
            {id: 1, container:"Onboarding", statusCode:"500", timeStamp:"2022-01-01:04:06:05" },
            {id: 2, container:"Server", statusCode:"", timeStamp:"2022-01-01:04:06:05" },
            {id: 3, container:"Change details", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:2,
        parent:"Mailbox" ,
        pods:
        [
            {id: 4, container:"Recieve-emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 5, container:"Search-emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 6, container:"Send-emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 7, container:"Forward-emails", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:3,
        parent:"Login" ,
        pods:
        [  
            {id: 8, container:"Login", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 9, container:"Change-passwords", statusCode:"403", timeStamp:"2022-01-01:04:04:02" },
            {id: 10, container:"Login-in-other-mailbox", statusCode:"", timeStamp:"2022-01-01:04:04:02" },
            {id: 11, container:"Update-Preferences", statusCode:"200",timeStamp:"2022-01-01:04:04:02" },
        ]
        
    }
    ,
    {
        id:4,
        parent:"System" ,
        pods:
        [  
            {id:12, container:"System-Status", statusCode:"200", timeStamp:"2022-01-01:04:04:02" },
            {id:12, container:"Server-Status", statusCode:"200",timeStamp:"2022-01-01:04:04:02" },
        ]
        
    }
    ,
    {
        id:5,
        parent:"Admin Portal" ,
        pods:
        [
            {id: 13, container:"LoginAdmin", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 14, container:"Create-branch", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 15, container:"Delete-branch", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
            {id: 16, container:"Edit-branch", statusCode:"200", timeStamp:"2022-01-01:04:06:05" },
        ]
    }
    ,
    {
        id:6,
        parent:"MitHighlight" ,
        pods:
        [  
            {id: 17, container:"Highlight", statusCode:"200",  timeStamp:"2022-01-01:04:01:01" },
            {id: 18, container:"Export", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 19, container:"Edit", statusCode:"200",timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ,
    {
        id:7,
        parent:"MitPay" ,
        pods:
        [  
            {id: 20, container:"Pay", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 21, container:"Cancel", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 21, container:"submit Payment request", timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ,
    {
        id:8,
        parent:"MitForms" ,
        pods:
        [  
            {id: 20, container:"Recive form", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 21, container:"Send form", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 22, container:"Complete form", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ,
    {
        id:9,
        parent:"MitSign" ,
        pods:
        [  
            {id: 23, container:"Sign paper", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
            {id: 24, container:"Send email to sign", statusCode:"200", timeStamp:"2022-01-01:04:01:01" },
        ]
        
    }
    ]

export const previousStatusData =
[
    {id: 1, title:"Severe downtime", message:"Fully operational", severity:"5" },
    {id: 2, title:"Minor maintainance", message:"Fully operational", severity:"2" },
    {id: 3, title:"Inoperable sign-in", message:"Fully operational", severity:"4" },
    {id: 4, title:"Scheduled downtime", message:"Fully operational", severity:"1" },
    {id: 5, title:"Unexpected downtime", message:"Fully operational", severity:"3" },
]

export const statusListData =
[
    {id: 1, title:"Severe downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"5" },
    {id: 2, title:"Minor maintainance", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"2" },
    {id: 3, title:"Inoperable sign-in", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"4" },
    {id: 4, title:"Scheduled downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"1" },
    {id: 5, title:"Unexpected downtime", message:"Fully operational", timeStamp:"2022-01-01:04:01:01", severity:"3" },
    {id: 6, container:"User-profile-store", statusCode:"500", message:"Offline", timeStamp:"2022-01-01:04:06:05" },
    {id: 7, container:"User-profile-index", statusCode:"", message:"Unknown", timeStamp:"2022-01-01:04:06:05" },
    {id: 8, container:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 9, container:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 10, container:"Mailbox-store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 11, container:"Mailbox-index", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 12, container:"Mailbox-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
    {id: 13, container:"Auth-server", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
    {id: 14, container:"Identity-registry-index", statusCode:"403", message:"Semi operational", timeStamp:"2022-01-01:04:04:02" },
    {id: 15, container:"Identity-registry-service", statusCode:"", message:"Unknown", timeStamp:"2022-01-01:04:04:02" },
    {id: 16, container:"Identity-registry-Store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:04:02" },
    {id: 17, container:"Gateway", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:04:02" },
]
